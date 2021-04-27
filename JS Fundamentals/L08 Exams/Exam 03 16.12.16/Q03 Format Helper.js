function formatText(text) {
    console.log(text[0]
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}

formatText(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 .']);