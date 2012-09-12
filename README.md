PE-Analog-Clock-icon-font
=========================

A set of icons for displaying a visual ("analog") representation of time stamps. 

The Analog Clock icon set allows <code>&lt;time&gt;</code> elements to have a visual notation in a simple, progressive way using a @font-face to deliver a custom font for the clock face. The icon is therefore scalable and can be styled with CSS to match most site designs. 

The required HTML can be implemented server-side in any application to output the desired icons. Optionally, for users that do not have server-side access, a javascript plug-in can sniff out <code>&lt;time&gt;</code> elements and add the HTML necessary for the icon set. Both options are documented in the sample and can be modified to fit specific situations. 

The CSS uses <code>:before</code> pseudo elements to place the icons, therefore, there is no extraneous HTML content present when the <code>:before</code> element is not supported. Graceful fallback to the contents of the <code>&lt;time&gt;</code> element.

<strong>Supports:</strong></p>
<ul>
<li>Military time</li>
<li>Overlapping digit notations: <code>hour-00</code>, <code>hour-24</code>, <code>minute-00</code>, <code>minute-60</code>
<li>Single digit hour values: <code>hour-01</code> as well as <code>hour-1</code></li>
</ul>