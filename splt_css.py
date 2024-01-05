import re

def read_data(filepath):
    with open(filepath, encoding="utf-8") as h:
        return h.read()


class SplitDiv:
    def __init__(self):
        self.matching_pair_advance = None
        self.matching_pairs = None
        self.lines = None
        self.space_length = None
        self.start_css = None
        self.css_list = None

    def set_lines(self, lines):
        self.lines = lines
        self.count_space()
        self.calculate_start_css()

    def count_space(self):
        cs = {}
        for i, line in enumerate(self.lines):
            t = 0
            while t < len(line) and line[t].isspace():
                t += 1
            cs[i] = t
        self.space_length = cs

    def calculate_start_css(self):
        cards = {}
        for i in range(len(self.lines)):
            cards[i] = not (self.lines[i].strip().startswith(".") and self.lines[i].strip().endswith("{") or self.lines[
                i].strip().endswith("}"))
        self.start_css = cards

    def is_end_css(self, start, now) -> bool:
        return self.space_length[start] == self.space_length[now] and self.lines[now].endswith("</div>")

    def split_css(self):
        self.css_list = []
        start = None
        for i in range(len(self.lines)):
            line = self.lines[i].strip()
            if line.endswith("{") and line.startswith("."):
                start = i
            elif line.endswith("}") and start is not None:
                end = i
                raw_css = "\n".join(self.lines[start:end + 1])
                self.css_list.append({'raw': raw_css})
                start = None

    def simple_css(self):
        for i in range(len(self.css_list)):
            raw_css = self.css_list[i]['raw']
            simple_css = re.sub(r'\n\s*', '\n', raw_css)
            simple_css = re.sub(r'.*\{', '{', simple_css)
            simple_css = re.sub(r'background-image: url\((.*?)\)', 'background-image: url()', simple_css)
            self.css_list[i]['simple'] = simple_css

    def find_matching_pairs(self):
        n = len(self.css_list)
        self.matching_pair_advance = []
        for i in range(n):
            for j in range(i + 1, n):
                if self.css_list[i]['simple'] == self.css_list[j]['simple']:
                    self.insert_matching_pairs(self.css_list[i]['raw'], self.css_list[j]['raw'])

    def insert_matching_pairs(self, text_1, text_2):
        # matching_pairs = [[0 for j in range(len(text_1))] for i in range(text_2)]
        matching_pairs = []
        for h in range(len(self.css_list)):
            for k in range(h+1,len(self.css_list)):
                if self.css_list[h]['raw'] not in matching_pairs:
                    text_1=matching_pairs.append(self.css_list[h]['raw'])
                if self.css_list[k]['raw'] not in matching_pairs:
                    text_2=matching_pairs.append(self.css_list[k]['raw'])

        for h in range(len(self.matching_pairs)):
            m = self.matching_pairs[h]
            if

        self.matching_pairs = matching_pairs


def main():
    data = read_data("css.txt")
    lines = data.split("\n")

    split_css = SplitDiv()
    split_css.set_lines(lines)
    split_css.split_css()
    split_css.simple_css()
    split_css.find_matching_pairs()
    # for r in result:
    #     print(r)
    print("==============================")
    # for i in split_css.results:
    #     print(i)
    for css in split_css.matching_pairs:
        print(css)


if __name__ == "__main__":
    main()


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
#         self.matching_pair_advance = None
#         self.matching_pairs = None
#         self.lines = None
#         self.space_length = None
#         self.start_css = None
#         self.css_list = None
#
#     def set_lines(self, lines):
#         self.lines = lines
#         self.count_space()
#         self.calculate_start_css()
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
#     def calculate_start_css(self):
#         cards = {}
#         for i in range(len(self.lines)):
#             cards[i] = not (self.lines[i].strip().startswith(".") and self.lines[i].strip().endswith("{") or self.lines[
#                 i].strip().endswith("}"))
#         self.start_css = cards
#
#     def is_end_css(self, start, now) -> bool:
#         return self.space_length[start] == self.space_length[now] and self.lines[now].endswith("</div>")
#
#     def split_css(self):
#         self.css_list = []
#         start = None
#         for i in range(len(self.lines)):
#             line = self.lines[i].strip()
#             if line.endswith("{") and line.startswith("."):
#                 start = i
#             elif line.endswith("}") and start is not None:
#                 end = i
#                 raw_css = "\n".join(self.lines[start:end + 1])
#                 self.css_list.append({'raw': raw_css})
#                 start = None
#
#     def simple_css(self):
#         for i in range(len(self.css_list)):
#             raw_css = self.css_list[i]['raw']
#             simple_css = re.sub(r'\n\s*', '\n', raw_css)
#             simple_css = re.sub(r'.*\{', '{', simple_css)
#             simple_css = re.sub(r'background-image: url\((.*?)\)', 'background-image: url()', simple_css)
#             self.css_list[i]['simple'] = simple_css
#
#     def find_matching_pairs(self):
#         n = len(self.css_list)
#         matching_pairs = []
#         self.matching_pair_advance = []
#         for i in range(n):
#             for j in range(i + 1, n):
#                 seq_matcher = SequenceMatcher(None, self.css_list[i]['simple'], self.css_list[j]['simple'])
#                 similarity_ratio = seq_matcher.ratio()
#                 if similarity_ratio == 1 and i not in matching_pairs and j not in matching_pairs:
#                     # matching_pairs.extend([i, j])
#                     matching_pairs.append(self.css_list[i]['simple'])
#                     break
#         matching_pairs=self.matching_pairs
#         # self.matching_pairs = [[self.css_list[i]['raw'], self.css_list[j]['raw']] for i,
#         j in zip(matching_pairs[::2], matching_pairs[1::2])]
#
# def main():
#     data = read_data("css.txt")
#     lines = data.split("\n")
#     split_css = SplitDiv()
#     split_css.set_lines(lines)
#     split_css.split_css()
#     split_css.simple_css()
#     split_css.find_matching_pairs()
#
#     print("==============================")
#     for pair in split_css.matching_pairs:
#         print(pair)
#
# if __name__ == "__main__":
#     main()
