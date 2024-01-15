import re
from difflib import SequenceMatcher


def read_data(filepath):
    with open(filepath, encoding="utf-8") as h:
        return h.read()


class SplitDiv:
    def __init__(self):
        self.list = None
        self.new_matching_pair_advance = None
        self.lines = None
        self.space_length = None
        self.start_div = None
        self.div_list = None
        self.modified_divs = None
        self.matching_pair_advance = None
        self.match = None
        self.father_of_simple_div = None

    def set_lines(self, lines):
        self.lines = lines
        self.count_space()
        self.calculate_start_div()
        self.modified_divs = []
        self.match = []

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
                if similarity_ratio == 1:
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
        for simple_div in self.matching_pair_advance:
            is_child = False
            for child_father in child_father_list:
                if child_father["child_card"] == simple_div:
                    is_child = True
                    break
            if not is_child:
                self.new_matching_pair_advance.append(simple_div)

    def get_raw_div(self):
        self.list = []
        # indices_to_remove = set()
        for common_simple_div in self.new_matching_pair_advance:
            save = []
            for div in self.div_list:
                if common_simple_div == div["simple"]:
                    save.append(div["text"])

            self.list.append({
                "simple_list": common_simple_div,
                "raw_div_list": save
            })

    # def get_father_of_simple_div(self):
    #     self.father_of_simple_div = []
    #     for i in range(len(self.list)):
    #         for j in range(len(self.div_list)):
    #             if self.list[i]["raw_div_list"] in self.div_list[j]["text"]:
    #                 self.father_of_simple_div.append(self.div_list[j]["text"])

    def get_father_of_simple_div(self):
        self.father_of_simple_div = []
        for i in range(len(self.div_list)):
            for j in range(len(self.list)):
                print('j =', j)
                for raw_div in self.list[j]["raw_div_list"]:
                    if raw_div in self.div_list[i]["text"] and len(self.div_list[i]["text"]) > len(raw_div):
                        self.father_of_simple_div.append(self.div_list[i]["text"])
                        break
                break

def main():
    data = read_data("data.html")
    lines = data.split("\n")
    split_div = SplitDiv()
    split_div.set_lines(lines)
    split_div.split_div()

    split_div.find_matching_component()

    split_div.is_child_card()

    split_div.get_raw_div()
    for l in split_div.list:
        print("~"*100)
        print(l['simple_list'])
        for r in l['raw_div_list']:
            print(r)

    split_div.get_father_of_simple_div()
    for m in split_div.father_of_simple_div:
        print("-"*100)
        print(m)

    print(len(split_div.list))
    print(len(split_div.father_of_simple_div))


if __name__ == "__main__":
    main()
