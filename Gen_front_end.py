# # def read_data():
# #     with open('data.html', encoding='utf-8') as h:
# #         return h.read()
# #
# # def count_space(lines):
# #     kq = []
# #     for line in lines:
# #         t = 0
# #         while t < len(line) and line[t].isspace():
# #             t += 1
# #         kq.append(t)
# #     return kq
# # def get_father_card(lines, kq):
# #     start = None
# #     for i in range(len(lines)):
# #         if lines[i].endswith('<div class="main">'):
# #             start = i
# #         elif lines[i].endswith("</div>") and start is not None and kq[start] == kq[i]:
# #             end = i
# #             break
# #     ket_qua="\n".join(lines[start :end+1] )
# #     return ket_qua
# #
# # def get_child_card(lines,kq):
# #     start=2
# #     end = None
# #     for i in range(len(lines)-1):
# #         start = i+1
# #         end=None
# #         if kq[i + 1] >= kq[i]:
# #             break
# #         else:
# #             if lines[i].endswith("<\/div>|<\/body>") and kq[start] == kq[i]:
# #             end = i
# #             break
# #
# #         for j in range(i):
# #             start=i+1
# #             if lines[j + 1] >= lines[j]:
# #                 break
# #             if kq[j] == kq[start + 1]:
# #                 start = j
# #             elif lines[j].endswith("<\/div>") and start is not None and kq[start] == kq[j]:
# #                 end = j
# #                 break
# #     for i in range(len(lines)):
# #         for i in range(i):
# #             ketqua="\n".join(line[start:end+1])
# #
# #     return ketqua
#
#
#
# def main():
#     data = read_data()
#     lines = data.split("\n")
#     kq = count_space(lines)
#     s = get_father_card(lines, kq)
#     print(s)
#     print(get_child_card(lines,kq))
# main()
def read_data():
    with open('data.html', encoding='utf-8') as h:
        return h.read()

def count_space(lines):
    kq = []
    for line in lines:
        t = 0
        while t < len(line) and line[t].isspace():
            t += 1
        kq.append(t)
    return kq

def get_father_card(lines, kq):
    start = None
    for i in range(len(lines)):
        if lines[i].endswith('<div class="main">'):
            start = i
        elif lines[i].endswith("</div>") and start is not None and kq[start] == kq[i]:
            end = i
            break
    ket_qua = "\n".join(lines[start:end + 1])
    return ket_qua

def get_child_card(lines, kq):
    start = 2
    end = None
    for i in range(start, len(lines) - 1):
        start = i
        if kq[i + 1] >= kq[i]:
            break
        elif lines[i].endswith("</div>") and kq[st] == kq[i]:
            end = i
            break

        for j in range(i):
            st = start + 1
            if lines[j + 1] >= lines[j]:
                break
            if kq[j] == kq[st + 1]:
                st = j
            elif lines[j].endswith("</div>") and st is not None and kq[st] == kq[j]:
                en = j
                break
        # jt = "\n".join(lines(st:en + 1))
    ketqua = "\n".join(lines[start:end + 1])

    return ketqua

def main():
    data = read_data()
    lines = data.split("\n")
    kq = count_space(lines)
    s = get_father_card(lines, kq)
    print(s)
    print(get_child_card(lines, kq))

main()

"""
start=None
end=None
Ta có end
Nếu i là start thì kq[start]==kq[end]
Nếu i+1 có  kq[i+1]>=kq[i] thì không lấy con của dòng đấy
"""
"""
level: 3
start: 10
end: 16
content: "
      <div class="tiu">
        <div class="h-ng-b-n-ch-y">Flash sale</div>
        <div class="component">
          <div class="text-wrapper">Tất cả</div>
          <img class="clip-path-group" src="img/clip-path-group.png" />
        </div>
      </div>
"
"""