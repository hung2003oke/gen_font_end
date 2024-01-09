import re

def read_data(filepath):
    with open(filepath, encoding="utf-8") as h:
        return h.read()

class SplitDiv:
    def __init__(self):
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
            self.css_list[i]['class_name'] = re.sub(r'{[\s\S]*}', '', raw_css).strip()

            simple_css = raw_css
            simple_css = re.sub(r'.*\{', '{', simple_css)
            simple_css = re.sub(r'\n\s+background-image: url\((.*?)\).*\n', '\n', simple_css)
            self.css_list[i]['simple'] = simple_css

    def final_matching(self):
        n = len(self.css_list)
        matching_pairs = []
        indices_to_remove = set()
        for i in range(n):
            if i not in indices_to_remove:
                for j in range(i + 1, n):
                    if self.css_list[i]["simple"] == self.css_list[j]["simple"]:
                        indices_to_remove.add(j)
                if self.css_list[i]["simple"] not in matching_pairs:
                    matching_pairs.append(self.css_list[i]["raw"])
                    matching_pairs.append("class_name" + "_" + self.css_list[i]['class_name'] + "\n\n")
        self.matching_pairs = matching_pairs

    def create_new_css_file(self):
        new_css = ''
        change_css = []
        for css in self.css_list:
            if css['simple'] not in new_css:
                new_css += css['class_name'] + ' ' + css['simple'] + '\n\n'
            else:
                change_css.append(css)
        return new_css, change_css

def main():
    data = read_data("data.css")
    lines = data.split("\n")

    split_css = SplitDiv()
    split_css.set_lines(lines)
    split_css.split_css()
    split_css.simple_css()
    # split_css.final_matching()
    # print("==============================")
    # for css in split_css.matching_pairs:
    #     print(css)

    new_css, change_css = split_css.create_new_css_file()

    print(new_css)

if __name__ == "__main__":
    main()



