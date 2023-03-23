export const downloaderFunct = (link: string, name: string) => {
    const downloader = document.createElement('a');
    downloader.href = link;
    downloader.download = name;
    downloader.rel = "noopener"
    document.body.appendChild(downloader)
    downloader.click()
    document.body.removeChild(downloader)
};