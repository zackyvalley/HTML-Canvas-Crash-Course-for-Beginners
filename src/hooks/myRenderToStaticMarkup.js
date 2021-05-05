import { renderToStaticMarkup } from "react-dom/server";
import { Helmet } from "react-helmet";

// export function myRenderToStaticMarkup(element) {
//   return '<!DOCTYPE html>' + renderToStaticMarkup(element);
// }

export function myRenderToStaticMarkup(element) {

  const staticMarkup = renderToStaticMarkup(element);
  const helmet = Helmet.renderStatic();

  function replaceDataHelmet(helmet) {
    return helmet.replace(/data-react-helmet="true"/g, "");
  }

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${replaceDataHelmet(helmet.title.toString())}
        ${replaceDataHelmet(helmet.meta.toString())}
        ${replaceDataHelmet(helmet.link.toString())}
      </head>
      ${staticMarkup}
    </html>
  `;
}
