(() => {
    window.modModLoadController.addLifeTimeCircleHook('clothes-mods exportDataZip', {
        exportDataZip: async (zip) => {
            // export data that injected to memory
            zip.file('clothes-mods/js/clothing/feet', JSON.stringify(window.DOL.setup?.clothes?.feet, undefined, 2));
            return zip;
        }
    })
})();
