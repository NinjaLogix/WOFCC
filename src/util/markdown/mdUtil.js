import showdown from 'showdown';

export const convertMarkdown = text => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(text);

    return html;
};