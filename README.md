# HTML Countdown Form

A simple form and countdown clock used to promote engagement to your upcoming product. Great for use on landing and "Under Construction" pages.

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