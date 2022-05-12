---
title: Email us
hide_navigation: true
---

<div class="my-10">

<div class="text-center">
<h1>Drop us an email</h1>
</div>

<div class="mx-auto flex flex-col max-w-sm gap-4">
<a class="{{< param "style.button" >}}" href="mailto:{{< param "email" >}}">Open in default email app</a>
<a class="{{< param "style.button" >}} bg-neutral-500 hover:bg-neutral-600" href="https://mail.google.com/mail/?view=cm&fs=1&to={{< param "email" >}}">Open in Gmail</a>
<a class="{{< param "style.button" >}} bg-neutral-500 hover:bg-neutral-600" href="https://outlook.office.com/owa/?path=/mail/action/compose&to={{< param "email" >}}">Open in Outlook Web</a>
<a class="{{< param "style.button" >}} bg-neutral-500 hover:bg-neutral-600" href="https://compose.mail.yahoo.com/?to={{< param "email" >}}">Open in Yahoo</a>
<div class="flex">
<input class="{{< param "style.inputText" >}} rounded-r-none flex-1 min-w-0" type="email" readonly id="email" value="{{< param "email" >}}">
<button class="{{< param "style.button" >}} rounded-l-none" onclick="copy('{{< param "email" >}}')">Copy</button>
</div>
</div>

</div>
