---
layout: post
title: Make slack dark
subtitle: Used slack version is 3.2.0
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [slack, dark]
---

## Install

If you are installed slack from Windows App Store then remove it and install it again [here](https://slack.com/downloads).

## Dark theme installing

* go to `%homepath%\AppData\Local\slack\` directory
* open up the most recent version (e.g. app-3.2.0) then open resources\app.asar.unpacked\src\static\ssb-interop.js
* at the very bottom, add following code lines:
    ```js
    // First make sure the wrapper app is loaded
    document.addEventListener("DOMContentLoaded", function() {

       // Then get its webviews
       let webviews = document.querySelectorAll(".TeamView webview");

       // Fetch our CSS in parallel ahead of time
       const cssPath = 'https://cdn.rawgit.com/widget-/slack-black-theme/master/custom.css';
       let cssPromise = fetch(cssPath).then(response => response.text());

       let customCustomCSS = `
       :root {
          /* Modify these to change your theme colors: */
          --primary: #61AFEF;
          --text: #ABB2BF;
          --background: #282C34;
          --background-elevated: #3B4048;
       }
       div.c-message.c-message--light.c-message--hover
       {
        color: #fff !important;
        background-color: #2D313A !important;
       }

       div.c-virtual_list__scroll_container {
        background-color: #282C34 !important;
       }
       .p-message_pane .c-message_list:not(.c-virtual_list--scrollbar), .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider {
        z-index: 0;
       }

       div.comment.special_formatting_quote.content,.comment_body{
        color: #ABB2BF !important;
       }

       div.c-message:hover {
        background-color: #2D313A !important;
       }

       div.c-message_attachment.c-message_attachment{
        color: #7c7b7b !important;
       }

       span.c-message_attachment__pretext{
        color: #7c7b7b !important;
       }

       span.c-message__body,
       a.c-message__sender_link,
       span.c-message_attachment__media_trigger.c-message_attachment__media_trigger--caption,
       div.p-message_pane__foreword__description span
       {
           color: #afafaf !important;
       }

       pre.special_formatting{
         background-color: #222 !important;
         color: #8f8f8f !important;
         border: solid;
         border-width: 1 px !important;

       }

       // NOT WORKING
       // div.ql-editor.c-message__editor__input {
       //  background: #2c2d30 !important;
       // }
       //
       // div.c-message--light .c-message--highlight .c-message--editing .c-message--highlight_yellow_bg{
       //  background: #3B4048 !important;
       //  border: none !important;
       // }


       a, a:link, a:visited {
        color: #7ac143 !important;
       }

       a.c-member_slug--link {
           background: #3B4048 !important;
       }

       a.c-message__sender_link {
           color: #afafaf !important;
       }

       .c-reaction {
           background: #3B4048 !important;
           border: #000 !important;
       }

       .c-message_list__day_divider__label__pill {
           background: #3B4048 !important;
           color: #888 !important;
       }

        .c-message_list__day_divider__line {
            border-top: 1px solid #3B4048 !important;
        }

        .c-mrkdwn__broadcast--mention, .c-mrkdwn__broadcast--mention:hover, .c-mrkdwn__highlight, .c-mrkdwn__mention, .c-mrkdwn__mention:hover, .c-mrkdwn__user_group--mention, .c-mrkdwn__user_group--mention:hover {
            color: #7ac143 !important;
            background: #3B4048 !important;
        }

        .c-snippet__code .CodeMirror-code>div:before {
            background: #3B4048 !important;
            border-right: 1px solid #777 !important;
        }

        .c-file_container--gradient:after {
            background: linear-gradient(180deg,hsla(0,0%,100%,0),#2D313A) !important;
        }

        .message_pane__limited_history_foreword {
            background-color: #7ac143 !important;
        }

        .c-file_container {
            border: 1px solid #3B4048 !important;
        }

        .CodeMirror {
            background: #3B4048 !important;
        }

        .c-deprecated_button--link {
            color: #7ac143 !important;
        }

        .c-message--highlight, .c-message--highlight_yellow_bg {
            background-color: #2D313A !important;
        }

		.p-message_pane__limited_history_foreword {
			background-color: #2D313A !important;
			color: #7ac143 !important;
			background-image: none !important;
		}
		.c-deprecated_rounded_button, .c-deprecated_rounded_button:hover {
			background-color: #7ac143 !important;
		}

		.c-deprecated_rounded_button:link, .c-deprecated_rounded_button:visited {
			color: #fff !important;
		}

		.c-deprecated_rounded_button:hover:after {
			box-shadow: none !important;
		}
        `

       // Insert a style tag into the wrapper view
       cssPromise.then(css => {
          let s = document.createElement('style');
          s.type = 'text/css';
          s.innerHTML = css + customCustomCSS;
          document.head.appendChild(s);
       });

       // Wait for each webview to load
       webviews.forEach(webview => {
          webview.addEventListener('ipc-message', message => {
             if (message.channel == 'didFinishLoading')
                // Finally add the CSS into the webview
                cssPromise.then(css => {
                   let script = `
                         let s = document.createElement('style');
                         s.type = 'text/css';
                         s.id = 'slack-custom-css';
                         s.innerHTML = \`${css + customCustomCSS}\`;
                         document.head.appendChild(s);
                         `
                   webview.executeJavaScript(script);
                })
          });
       });
    });
    ```
* restart slack

## Customize more then upper code

Then go to web slack and check there css styles and add wanted changes to upper code :)