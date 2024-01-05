"""
1. đọc file và tạo ra mảng A lấy dữ liệu cảu từng dòng
2. for trong mảng A Lấy tất cả các đối tượng ra: dòng, kiểu thẻ, tên, ví trí, kích thước
                        Regex để lấy kiểu thẻ là: 
                        Regex để lấy tên là: 
                        Regex để lấy vị trí top là: 
                        Regex để lấy vị trí left là: 
                        Regex để lấy kích thước width là: 
                        Regex để lấy kích thước height là: 
                            Từ giá trị àm regex trả về thì lấy giá trị thực tế bằng cách: 
3. lặp 2 vòng for lồng nhau:
    3.1. vòng for ngoài để lấy các Rectangle
                        Để check Rectangle là: "Rectangle" in class_name:
                            Nếu đúng thì chạy for trong,
                            Nếu sai thì tiếp tục
    3.2. Nếu bên ngoài là Rectangle thì vòng for trong để kiểm tra xem phần tử hiện tại có thuộc Rectangle kia không
                        Để kiểm tra xem 1 phần tử có thuộc Rectangle kia không bằng cách:
                            Lấy vị trí của thằng hiện tại so với vị trí của thằng Rectangle kia, nếu đúng thì lưu lại
                                Để kiểm tra thì: 
(Lưu lại kiểu gì: json key là id cảu cha và value là mảng chứa các id con)
"""
# import re
#
# html = open("doc.txt")
# string = html.split("\n")
#
# result_array = []
#
# for i in range(len(string)):
#     s = string[i]
#     card_pattern = "<\w+"
#     class_pattern = 'class="([^"]+)"'
#     width_pattern = "width: (-?\d+\.?\d*)px"
#     height_pattern = "height: (-?\d+\.?\d*)px"
#     left_pattern = "left: (-?\d+\.?\d*)px"
#     top_pattern = "top: (-?\d+\.?\d*)px"
#
#     card_result = re.findall(card_pattern, s)
#     class_result = re.findall(class_pattern, s)
#     width_result = re.findall(width_pattern, s)
#     height_result = re.findall(height_pattern, s)
#     left_result = re.findall(left_pattern, s)
#     top_result = re.findall(top_pattern, s)
#
#     if class_result and width_result and height_result and left_result and top_result:
#         item = {
#             "line": i + 1,
#             "card" : card_result[0],
#             "class": class_result[0],
#             "width": float(width_result[0]),
#             "height": float(height_result[0]),
#             "left": float(left_result[0]),
#             "top": float(top_result[0]),
#             "content": s
#         }
#         result_array.append(item)
#         print(item)
#
# rectangle = {}
# for i in range(len(result_array)):
#     p = result_array[i]
#     if 'Rectangle' not in p['class']:
#         continue
#     rectangle[p['line']] = []
#     for j in range(len(result_array)):
#         if i == j:
#             continue
#         k = result_array[j]
#         if (
#             p["top"] + p["height"] >= k["top"] + k["height"]
#             and p["width"] + p["left"] >= k["width"] + k["left"]
#             and p["top"] <= k["top"]
#             and p["left"] <= k["left"]
#         ):
#             rectangle[p['line']].append(k['line'])
#             print("Hình {} bao hình {}".format( p['line'], k['line']))
#
# for r in rectangle.keys():
#     if len(rectangle[r]) > 1 and len(rectangle[r]) < 50:
#         print(r, '\t', rectangle[r])
#
# print(rectangle)
# import re
#
# with open('doc.txt', 'r') as html:
#     result_array = []
#     line_number = 0
#     while True:
#         data = html.readline()
#         if not data:
#             break
#         line_number += 1
#         string = data.strip()
#
#         card_pattern = "<\w+"
#         class_pattern = 'class="([^"]+)"'
#         width_pattern = "width: (-?\d+\.?\d*)px"
#         height_pattern = "height: (-?\d+\.?\d*)px"
#         left_pattern = "left: (-?\d+\.?\d*)px"
#         top_pattern = "top: (-?\d+\.?\d*)px"
#
#         card_result = re.findall(card_pattern, string)
#         class_result = re.findall(class_pattern, string)
#         width_result = re.findall(width_pattern, string)
#         height_result = re.findall(height_pattern, string)
#         left_result = re.findall(left_pattern, string)
#         top_result = re.findall(top_pattern, string)
#
#         if class_result and width_result and height_result and left_result and top_result:
#             item = {
#                 "line": line_number,
#                 "card": card_result[0],
#                 "class": class_result[0],
#                 "width": float(width_result[0]),
#                 "height": float(height_result[0]),
#                 "left": float(left_result[0]),
#                 "top": float(top_result[0]),
#                 "content": string
#             }
#             result_array.append(item)
#             print(item)
# rectangle = {}
# for i in range(len(result_array)):
#     p = result_array[i]
#     if 'Rectangle' not in p['class']:
#         continue
#     rectangle[p['line']] = []
#     for j in range(len(result_array)):
#         if i == j:
#             continue
#         k = result_array[j]
#         if (
#             p["top"] + p["height"] >= k["top"] + k["height"]
#             and p["width"] + p["left"] >= k["width"] + k["left"]
#             and p["top"] <= k["top"]
#             and p["left"] <= k["left"]
#         ):
#             rectangle[p['line']].append(k['line'])
#             print("Hình {} là{} bao hình {} là {}".format( p['line'], k['line']))
#
# for r in rectangle.keys():
#     if len(rectangle[r]) > 1 and len(rectangle[r]) < 50:
#         print(r, '\t', rectangle[r])
#
# print(rectangle)
import re

tag = {}
with open('doc.txt', 'r') as html:
    result_array = []
    line_number = 0
    while True:
        data = html.readline()
        if not data:
            break
        line_number += 1
        string = data.strip()

        card_pattern = "<\w+"
        class_pattern = 'class="([^"]+)"'
        width_pattern = "width: (-?\d+\.?\d*)px"
        height_pattern = "height: (-?\d+\.?\d*)px"
        left_pattern = "left: (-?\d+\.?\d*)px"
        top_pattern = "top: (-?\d+\.?\d*)px"

        card_result = re.findall(card_pattern, string)
        class_result = re.findall(class_pattern, string)
        width_result = re.findall(width_pattern, string)
        height_result = re.findall(height_pattern, string)
        left_result = re.findall(left_pattern, string)
        top_result = re.findall(top_pattern, string)

        if class_result and left_result and top_result:
            item = {
                "line": line_number,
                "card": card_result[0],
                "class": class_result[0],
                "width": 0,
                "height": 0,
                "left": float(left_result[0]),
                "top": float(top_result[0]),
                "content": string
            }
            if width_result:
                item["width"] = float(width_result[0])
            if height_result:
                item["height"] = float(height_result[0])
            tag[line_number] = string
            result_array.append(item)
            # print(item)

rectangle = {}
for i in range(len(result_array)):
    p = result_array[i]
    if 'Rectangle' not in p['class'] and 'Ellipse' not in p['class']:
        continue
    if p["height"] == 0 or p["width"] == 0:
        continue
    rectangle[p['line']] = []
    for j in range(len(result_array)):
        if i == j:
            continue
        k = result_array[j]
        if (
            p["top"] + p["height"] >= k["top"] + k["height"]
            and p["width"] + p["left"] >= k["width"] + k["left"]
            and p["top"] <= k["top"]
            and p["left"] <= k["left"]
        ):
            rectangle[p['line']].append(k['line'])
            # print("Hình {} là{} bao hình {} là {}".format(p['line'], p['content'], k['line'], k['content']))
    # print("\n")

for r in rectangle.keys():
    if True: # len(rectangle[r]) > 1 and len(rectangle[r]) < 50:
        print('\n\n')
        print(r, '\t', rectangle[r])
        print(tag[r])
        for i in rectangle[r]:
            print("\t", tag[i])

print(rectangle)
