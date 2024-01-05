def read_data(filepath):
    with open(filepath, encoding="utf-8") as h:
        return h.read()


class SplitDiv:
    def __init__(self):
        self.lines = None
        self.space_length = None
        self.start_div = None

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
        result = []
        for i in range(1,len(self.lines)):
            if self.start_div[i]:
                for j in range(i,len(self.lines)):
                    if self.space_length[i] == self.space_length[j] and self.lines[j].strip().endswith("</div>"):
                        result.append({
                            'start': i,
                            'end': j,
                            'text': '\n'.join(self.lines[i: j+1]),
                        })
                        break
        print(f'\n\n{"#" * 100}\n\n')
        for t in result:
            print(t['text'])
            print(f'\n\n{"#"*100}\n\n')
        return result


def main():
    data = read_data("data.html")
    lines = data.split("\n")
    split_div = SplitDiv()
    split_div.set_lines(lines)
    split_div.split_div()


if __name__ == "__main__":
    main()

