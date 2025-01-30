```javascript
<div class="p-4 rounded-lg shadow-md" style="background-image: linear-gradient(to right, #6366F1, #818CF8);">
  <p>This is some text.</p>
</div>
```
This solution uses the `style` attribute to directly apply the linear gradient using standard CSS. This bypasses potential issues with Tailwind's utility classes and offers a more direct approach, ensuring the gradient is rendered consistently across browsers.  Consider adding vendor prefixes (-webkit-, -moz-) for even broader compatibility if needed.