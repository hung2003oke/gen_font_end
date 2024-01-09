# import re
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
#         self.result =None
#         self.clear_div= None
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
#         result = []
#         for i in range(1,len(self.lines)):
#             if self.start_div[i]:
#                 for j in range(i,len(self.lines)):
#                     if self.space_length[i] == self.space_length[j] and self.lines[j].strip().endswith("</div>"):
#
#                         result.append({
#                             'start': i,
#                             'end': j,
#                             'text': '\n'.join(self.lines[i: j+1]),
#                             'simple_div' : self.clear_div
#                         })
#                         break
#         print(f'\n\n{"#" * 100}\n\n')
#         for t in result:
#             print(t['text'])
#             print(f'\n\n{"#"*100}\n\n')
#         return result
#
#     def fun_clear_div(self, text):
#         for i in range(len(text)):
#             raw_div = text[i]
#             clear_div = raw_div
#             clear_div = re.sub(r'src="([^"]*)"', '" "', clear_div)
#             clear_div = re.sub(r'<div[^>]*>(.*?)<\/div>', '\n', clear_div)
#             text[i] = clear_div
#         return self.clear_div
#
#
# def main():
#     data = read_data("data.html")
#     lines = data.split("\n")
#     split_div = SplitDiv()
#     split_div.set_lines(lines)
#     split_div.split_div()
#     split_div.fun_clear_div()
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
        self.result = None
        self.modified_divs = None
        self.matching_pair_advance = None

    def set_lines(self, lines):
        self.lines = lines
        self.count_space()
        self.calculate_start_div()

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
        self.result = []
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
                        self.result.append(result_item)
                        break

        # print(f'\n\n{"#" * 100}\n\n')
        # for t in self.result:
        #     print(t['text'])
        #     print(f'\n\n{"#"*100}\n\n')
        return self.result

    def fun_clear_div(self, raw_div):
        # clear_div = raw_div
        # clear_div = re.sub(r'src="(.*)"', 'src=""', clear_div)
        # clear_div = re.sub(r'>.*?</div>', '></div>', clear_div)
        # return clear_div
        return re.sub(r'src="(.*)"', 'src=""', re.sub(r'>.*?</div>', '></div>', raw_div))

    def find_matching_component(self , modified_divs):
        n = len(modified_divs)
        matching_pair_advance = []
        raw_div= self.modified_divs["text"]
        for i in range(n):
            for j in range(i + 1, n):
                seq_matcher = SequenceMatcher(None, self.modified_divs[i]['clear_div'], self.modified_divs[j]['clear_div'])
                similarity_ratio = seq_matcher.ratio()
                if similarity_ratio >= 0.98:
                    matching_pair_advance.append((self.modified_divs[i]['text'], self.modified_divs[j]['text']))
        return matching_pair_advance

    def new_div(self):
        compare = []
        new_css = ''
        for css in self.modified_divs:
            if css['text'] not in new_css:
                new_css += css['class_name'] + ' ' + css['clear_div'] + '\n\n'
            else:
                compare.append(css)
        return new_css, compare


def main():
    data = read_data("data.html")
    lines = data.split("\n")
    split_div = SplitDiv()
    split_div.set_lines(lines)
    split_div.split_div()
    # split_div.find_matching_component()
    for matching_pair in split_div.result:
        print('\n\n', '#'*100)
        print(matching_pair['simple'])
    # modified_divs = split_div.fun_clear_div()
    # split_div.new_div()

if __name__ == "__main__":
    main()

