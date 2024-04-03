//LC_Default Project Folders v1//

function defaultProjectFolders() {
  
    app.beginUndoGroup("Default Folders");

    // Audio Folders
    var audio = app.project.items.addFolder("00 Audio");
    // Sub Folders
    var vo = app.project.items.addFolder("VO");
    var voArchive = app.project.items.addFolder("_Archive");
    var sfx = app.project.items.addFolder("SFX");
    var sfxArchive = app.project.items.addFolder("_Archive");
    var music = app.project.items.addFolder("Music");
    var musicPreview = app.project.items.addFolder("_Preview");

    // Asset Folders
    var assets = app.project.items.addFolder("01 Assets");
    // Sub Folders
    var assetsArchive = app.project.items.addFolder("_Archive");
    var assetsVideo = app.project.items.addFolder("Videos");
    var assetsAEP = app.project.items.addFolder("AEPs");

    // Graphics Folders
    var graphics = app.project.items.addFolder("02 Graphics");
    // Sub Folders
    var graphicArchive = app.project.items.addFolder("_Archive");
    var storyboardGraphics = app.project.items.addFolder("Storyboard");
    var aiFiles = app.project.items.addFolder("AI");
    var psdFiles = app.project.items.addFolder("PSD");
    var jpegPng = app.project.items.addFolder("JPEGs / PNG");
    var referenceImages = app.project.items.addFolder("_Ref Images");

    // Comps Folders
    var comps = app.project.items.addFolder("03 Comps");
    // Sub Folders
    var compsArchive = app.project.items.addFolder("_Archive");
    var pComps = app.project.items.addFolder("_pComps");
    var tests = app.project.items.addFolder("_Tests");

    // Parenting Comps //

    // Audio Folders
    audio;
    // Sub Folders
    vo.parentFolder = audio;
    voArchive.parentFolder = vo;
    sfx.parentFolder = audio;
    music.parentFolder = audio;
    musicPreview.parentFolder = music;
    sfxArchive.parentFolder = sfx;

    // Asset Folders
    assets;
    // Sub Folders
    assetsArchive.parentFolder = assets;
    assetsVideo.parentFolder = assets;
    assetsAEP.parentFolder = assets;
    
    // Graphics Folders
    graphics;
    // Sub Folders
    graphicArchive.parentFolder = graphics;
    storyboardGraphics.parentFolder = graphics;
    aiFiles.parentFolder = graphics;
    psdFiles.parentFolder = graphics;
    jpegPng.parentFolder = graphics;
    referenceImages.parentFolder = graphics;
    
    // Comps Folders
    comps;
    // Sub Folders
    compsArchive.parentFolder = comps;
    pComps.parentFolder = comps;
    tests.parentFolder = comps;

    app.endUndoGroup();

}

defaultProjectFolders();