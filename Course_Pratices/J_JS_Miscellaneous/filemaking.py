l = [
"Calculate current week number in JavaScript",
"Calculate days between two dates in JavaScript",
"JavaScript String trim()",
"JavaScript timer",
"Remove elements from array",
"JavaScript localStorage",
"JavaScript offsetHeight",
"Confirm password validation",
"Static vs Const",
"How to Convert Comma Separated String into an Array in JavaScript",
"Calculate age using JavaScript",
"JavaScript label statement",
"JavaScript String with quotes",
"How to create dropdown list using JavaScript",
"How to disable radio button using JavaScript",
"Check if the value exists in Array in Javascript",
"Javascript Setinterval",
"JavaScript Debouncing",
"JavaScript print() method",
"JavaScript editable table",
"CanvasJS",
]

html_text ='''
<html>
<head>
    <title>{tt}</title>
</head>
<body>
    <div>
        <h1>{tt}</h1>
    </div>
    <script>

    </script>
</body>
</html>
'''
i = 30
for _ in l:
    i=i+1
    s = str(i)+"_"+_ + ".html"
    s = s.replace(" ", "_")
    f = open(s, "w")
    f.write(html_text.format(tt=_))
