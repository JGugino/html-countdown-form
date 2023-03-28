![Countdown Form Cover](https://github.com/JGugino/html-countdown-form/blob/master/releases/publication/build_1.0/html_countdown_cover.png?raw=true "Countdown Form Cover Image")

A simple form and countdown clock used to promote engagement to your upcoming product. Great for use on landing and "Under Construction" pages.

**[View the live demo here!](https://tinyurl.com/countdown-form)**
---

## Usage
**To use the countdown form simply include the corresponding script and custom HTML element within your page. Examples of both versions below**

### Large Form Example:
```
<html>
    <head>
        <title>Page Title</title>
        <script src='./path/to/element/countdown_form_large.js'>
    </head>
    <body>
        <countdown-form-large 
            form-title="Example Form" 
            timer-title="Countdown to this Example"
            mode="light" 
            time="12/12/2112" 
            date-format="long"
            on-submit="handleForm"
        />
    </body>
</html>
```

### Small Form Example:
```
<html>
    <head>
        <title>Page Title</title>
        <script src='./path/to/element/countdown_form_small.js'>
    </head>
    <body>
        <countdown-form-small 
            timer-title="Countdown to this Example"
            mode="light" 
            time="12/12/2112" 
            date-format="long"
        />
    </body>
</html>
```

---

## Attributes

| Attribute | Description | Value | Large Form | Small Form |
| --------- | ----------- |---------- | ---------- | ---------- |
| `form-title` | Text at the top of the form | Any String | YES | NO |
| `timer-title` | Text above the countdown timer | Any String | YES | YES |
| `mode` | Which color mode to use | "light" or "dark" | YES | YES |
| `date-format` | Format the date to use month name (don't include to not format) | "long" | YES | YES |
| `on-submit` | Name of the function to be called when form is submitted  | function | YES | NO |
| `time` | The time to countdown to  | "month/day/year" | YES | YES |

---

## Changing Styles

**To change the styles of the form simply open either `countdown_form_large.js`, or `countdown_form_small.js` in your editor of choice and edit the CSS variables at the top of the template element to the desired colors**
