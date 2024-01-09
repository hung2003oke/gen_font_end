# import re
# from difflib import SequenceMatcher
#
#
# def read_data(filepath):
#     with open(filepath, encoding="utf-8") as h:
#         return h.read()
#
#
# class SplitDiv:
#     def __init__(self):
#         self.lines = None
#         self.space_length = None
#         self.start_div = None
#         self.div_list = None
#         self.modified_divs = None
#         self.matching_pair_advance = None
#
#     def set_lines(self, lines):
#         self.lines = lines
#         self.count_space()
#         self.calculate_start_div()
#
#     def count_space(self):
#         cs = {}
#         for i, line in enumerate(self.lines):
#             t = 0
#             while t < len(line) and line[t].isspace():
#                 t += 1
#             cs[i] = t
#         self.space_length = cs
#
#     def calculate_start_div(self):
#         cards = {}
#         for i in range(len(self.lines)):
#             cards[i] = not (self.lines[i].strip().endswith("</div>") or self.lines[i].strip().endswith("/>"))
#         self.start_div = cards
#
#     def is_end_div(self, start, now) -> bool:
#         return self.space_length[start] == self.space_length[now] and self.lines[now].endswith("</div>")
#
#     def split_div(self):
#         self.div_list = []
#         for i in range(1, len(self.lines)):
#             if self.start_div[i]:
#                 for j in range(i, len(self.lines)):
#                     if self.space_length[i] == self.space_length[j] and self.lines[j].strip().endswith("</div>"):
#                         text = '\n'.join(self.lines[i: j + 1])
#                         result_item = {
#                             'start': i,
#                             'end': j,
#                             'text': text,
#                             'simple': self.fun_clear_div(text)
#                         }
#                         self.div_list.append(result_item)
#                         break
#         return self.div_list
#
#     def fun_clear_div(self, raw_div):
#         clear_div = raw_div
#         clear_div = re.sub(r'src="(.*)"', 'src=""', clear_div)
#         clear_div = re.sub(r'>.*?</div>', '></div>', clear_div)
#         return clear_div
#
#     def find_matching_component(self , modified_divs):
#         n = len(modified_divs)
#         matching_pair_advance = []
#         raw_div= self.modified_divs["text"]
#         for i in range(n):
#             for j in range(i + 1, n):
#                 seq_matcher = SequenceMatcher(None, self.modified_divs[i]['simple'], self.modified_divs[j]['simple'])
#                 similarity_ratio = seq_matcher.ratio()
#                 if similarity_ratio == 1:
#                     matching_pair_advance.append((self.modified_divs[i]['text'], self.modified_divs[j]['text']))
#         return matching_pair_advance
#
#     def new_div(self):
#         compare = []
#         new_css = ''
#         for css in self.modified_divs:
#             if css['text'] not in new_css:
#                 new_css += css['class_name'] + ' ' + css['clear_div'] + '\n\n'
#             else:
#                 compare.append(css)
#         return new_css, compare
#
#
# def main():
#     data = read_data("data.html")
#     lines = data.split("\n")
#     split_div = SplitDiv()
#     split_div.set_lines(lines)
#     split_div.split_div()
#     # split_div.find_matching_component()
#     for i in split_div.div_list:
#         print('\n\n', '#'*100)
#         print(i['simple'])
#     # modified_divs = split_div.fun_clear_div()
#     # split_div.new_div()
#     for matching_pair in split_div.matching_pair_advance:
#         print('\n\n','#'*100)
#         print(matching_pair)
#
# if __name__ == "__main__":
#     main()


import re
from difflib import SequenceMatcher


def read_data(filepath):
    with open(filepath, encoding="utf-8") as h:
        return h.read()


class SplitDiv:
    def __init__(self):
        self.lines = None
        self.space_length = None
        self.start_div = None
        self.div_list = None
        self.modified_divs = None
        self.matching_pair_advance = None

    def set_lines(self, lines):
        self.lines = lines
        self.count_space()
        self.calculate_start_div()
        self.modified_divs = []  # Initialize modified_divs

    def count_space(self):
        cs = {}
        for i, line in enumerate(self.lines):
            t = 0
            while t < len(line) and line[t].isspace():
                t += 1
            cs[i] = t
        self.space_length = cs

    def calculate_start_div(self):
        cards = {}
        for i in range(len(self.lines)):
            cards[i] = not (self.lines[i].strip().endswith("</div>") or self.lines[i].strip().endswith("/>"))
        self.start_div = cards

    def is_end_div(self, start, now) -> bool:
        return self.space_length[start] == self.space_length[now] and self.lines[now].endswith("</div>")

    def split_div(self):
        self.div_list = []
        for i in range(1, len(self.lines)):
            if self.start_div[i]:
                for j in range(i, len(self.lines)):
                    if self.space_length[i] == self.space_length[j] and self.lines[j].strip().endswith("</div>"):
                        text = '\n'.join(self.lines[i: j + 1])
                        result_item = {
                            'start': i,
                            'end': j,
                            'text': text,
                            'simple': self.fun_clear_div(text)
                        }
                        self.div_list.append(result_item)
                        break
        return self.div_list

    def fun_clear_div(self, raw_div):
        clear_div = raw_div
        clear_div = re.sub(r'^\s*', '', clear_div)
        clear_div = re.sub(r'\n\s*', '\n', clear_div)
        clear_div = re.sub(r'src="(.*)"', 'src=""', clear_div)
        clear_div = re.sub(r'>.*?</div>', '></div>', clear_div)
        return clear_div

    def find_matching_component(self):
        n = len(self.div_list)
        matching_pair_advance = []
        for i in range(n):
            for j in range(i + 1, n):
                seq_matcher = SequenceMatcher(None, self.div_list[i]['simple'], self.div_list[j]['simple'])
                similarity_ratio = seq_matcher.ratio()
                if similarity_ratio >= 0.95:
                    if self.div_list[i]["simple"] not in matching_pair_advance:
                        matching_pair_advance.append(self.div_list[i]['simple'])
        self.matching_pair_advance = matching_pair_advance
        return matching_pair_advance


def main():
    data = read_data("data.html")
    lines = data.split("\n")
    split_div = SplitDiv()
    split_div.set_lines(lines)
    split_div.split_div()
    split_div.find_matching_component()
    # for i in split_div.div_list:
    #     print('\n\n', '#'*100)
    #     print(i['simple'])
    for matching_pair in split_div.matching_pair_advance:
        print('#' * 100)
        print(matching_pair)


if __name__ == "__main__":
    main()
