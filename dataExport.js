(() => {
    window.modModLoadController.addLifeTimeCircleHook('clothes-mods exportDataZip', {
        exportDataZip: async (zip) => {
            // export data that injected to memory
            zip.file('clothes-mods/js/clothing', JSON.stringify(window.initFeet?.setup?.moddedClothes?.feet, undefined, 2));
            return zip;
        }
    })
})();
