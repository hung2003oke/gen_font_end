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
#         self.new_matching_pair_advance = None
#         self.lines = None
#         self.space_length = None
#         self.start_div = None
#         self.div_list = None
#         self.modified_divs = None
#         self.matching_pair_advance = None
#         self.match = None  # Initialize match attribute
#
#     def set_lines(self, lines):
#         self.lines = lines
#         self.count_space()
#         self.calculate_start_div()
#         self.modified_divs = []  # Initialize modified_divs
#         self.match = []  # Initialize match attribute
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
#     @staticmethod
#     def fun_clear_div(raw_div):
#         clear_div = raw_div
#         clear_div = re.sub(r'^\s*', '', clear_div)
#         clear_div = re.sub(r'\n\s*', '\n', clear_div)
#         clear_div = re.sub(r'src="(.*)"', 'src=""', clear_div)
#         clear_div = re.sub(r'>.*?</div>', '></div>', clear_div)
#         return clear_div
#
#     def find_matching_component(self):
#         n = len(self.div_list)
#         self.matching_pair_advance = []
#         for i in range(n):
#             for j in range(i + 1, n):
#                 seq_matcher = SequenceMatcher(None, self.div_list[i]['simple'], self.div_list[j]['simple'])
#                 similarity_ratio = seq_matcher.ratio()
#                 if similarity_ratio >= 0.95:
#                     if self.div_list[i]["simple"] not in self.matching_pair_advance:
#                         self.matching_pair_advance.append(self.div_list[i]['simple'])
#         return self.matching_pair_advance
#
#     def split_father_card(self, i):
#         h = []
#         for char in self.div_list[i]["simple"]:
#             t = self.split_div(char)
#             h.append(t)
#
#     def is_child_card(self):
#         child_father_list = []
#         for i in range(len(self.matching_pair_advance)):
#             for j in range(i + 1, len(self.matching_pair_advance)):
#                 if self.matching_pair_advance[j] in self.matching_pair_advance[i]:
#                     child_father_list.append({
#                         "child_card": self.matching_pair_advance[j],
#                         "father_card": self.matching_pair_advance[i]
#                     })
#                 if self.matching_pair_advance[i] in self.matching_pair_advance[j]:
#                     child_father_list.append({
#                         "child_card": self.matching_pair_advance[i],
#                         "father_card": self.matching_pair_advance[j]
#                     })
#         self.new_matching_pair_advance = []
#         for i in self.matching_pair_advance:
#             not_child = False
#             for child_father in child_father_list:
#                 if child_father_list[i] is not_child:
#                     self.new_matching_pair_advance.append(child_father[i])
#
#
# def main():
#     data = read_data("data.html")
#     lines = data.split("\n")
#     split_div = SplitDiv()
#     split_div.set_lines(lines)
#     split_div.split_div()
#
#     split_div.find_matching_component()
#     # for matching_pair in split_div.matching_pair_advance:
#     #     print('#' * 100)
#     #     print(matching_pair)
#
#     split_div.is_child_card()
#     for m in split_div.child_father_list:
#         print('#' * 100)
#         print(m['child_card'])
#         print('-' * 100)
#         print(m['father_card'])
#     for q in split_div.new_matching_pair_advance:
#         print(q)
#
#
# if __name__ == "__main__":
#     main()
#
# #
import re
from difflib import SequenceMatcher


def read_data(filepath):
    with open(filepath, encoding="utf-8") as h:
        return h.read()


class SplitDiv:
    def __init__(self):
        self.new_matching_pair_advance = None
        self.lines = None
        self.space_length = None
        self.start_div = None
        self.div_list = None
        self.modified_divs = None
        self.matching_pair_advance = None
        self.match = None  # Initialize match attribute

    def set_lines(self, lines):
        self.lines = lines
        self.count_space()
        self.calculate_start_div()
        self.modified_divs = []  # Initialize modified_divs
        self.match = []  # Initialize match attribute

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

    @staticmethod
    def fun_clear_div(raw_div):
        clear_div = raw_div
        clear_div = re.sub(r'^\s*', '', clear_div)
        clear_div = re.sub(r'\n\s*', '\n', clear_div)
        clear_div = re.sub(r'src="(.*)"', 'src=""', clear_div)
        clear_div = re.sub(r'>.*?</div>', '></div>', clear_div)
        return clear_div

    def find_matching_component(self):
        n = len(self.div_list)
        self.matching_pair_advance = []
        for i in range(n):
            for j in range(i + 1, n):
                seq_matcher = SequenceMatcher(None, self.div_list[i]['simple'], self.div_list[j]['simple'])
                similarity_ratio = seq_matcher.ratio()
                if similarity_ratio >= 0.95:
                    if self.div_list[i]["simple"] not in self.matching_pair_advance:
                        self.matching_pair_advance.append(self.div_list[i]['simple'])
        return self.matching_pair_advance

    def split_father_card(self, i):
        h = []
        for char in self.div_list[i]["simple"]:
            t = self.split_div(char)
            h.append(t)

    def is_child_card(self):
        child_father_list = []
        for i in range(len(self.matching_pair_advance)):
            for j in range(i + 1, len(self.matching_pair_advance)):
                if self.matching_pair_advance[j] in self.matching_pair_advance[i]:
                    child_father_list.append({
                        "child_card": self.matching_pair_advance[j],
                        "father_card": self.matching_pair_advance[i]
                    })
                if self.matching_pair_advance[i] in self.matching_pair_advance[j]:
                    child_father_list.append({
                        "child_card": self.matching_pair_advance[i],
                        "father_card": self.matching_pair_advance[j]
                    })

        self.new_matching_pair_advance = []
        for i in self.matching_pair_advance:
            not_child = True
            for child_father in child_father_list:
                if child_father["child_card"] == i:
                    not_child = False
                    break
            if not_child == True:
                self.new_matching_pair_advance.append(i)


def main():
    data = read_data("data.html")
    lines = data.split("\n")
    split_div = SplitDiv()
    split_div.set_lines(lines)
    split_div.split_div()

    split_div.find_matching_component()

    split_div.is_child_card()
    for m in split_div.match:
        print('#' * 100)
        print(m['child_card'])
        print('-' * 100)
        print(m['father_card'])
    for q in split_div.new_matching_pair_advance:
        print("*"*100)
        print(q)


if __name__ == "__main__":
    main()
