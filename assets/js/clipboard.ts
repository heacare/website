export default function copy(s: string) {
  const fake = document.createElement("textarea");
  fake.style.position = "absolute";
  fake.style.top = "-9999px";
  fake.setAttribute("readonly", "");
  fake.value = s;
  document.body.append(fake);
  fake.select();
  fake.setSelectionRange(0, fake.value.length);
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy");
  }
  fake.remove();
}
