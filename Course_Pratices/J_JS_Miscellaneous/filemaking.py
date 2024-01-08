l = ["JS_Strict_Mode"
"JavaScript_Promise",
"JS_Compare_dates",
"JavaScript_array_length",
"JavaScript_alert",
"JavaScript_eval_function",
"JavaScript_closest",
"JavaScript_continue_statement",
"JS_getAttribute_method",
"JS_hide_elements",
"JavaScript_prompt",
"removeAttribute_method",
"JavaScript_reset",
"JavaScript_return",
"JS_String_split",
"JS_typeof_operator",
"JS_ternary_operator",
"JS_reload_method",
"JS_setAttribute_method",
"JS_setInterval_method",
"JS_setTimeout_method",
"JS_string_includes_method"
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
i = 9
for _ in l:
    i=i+1
    s = str(i)+"_"+_ + ".html"
    f = open(s, "w")
    f.write(html_text.format(tt=_))
