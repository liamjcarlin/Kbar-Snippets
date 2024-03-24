//Kbar Snippets Archive

/*//Contents

• Default Folders

*/

//Default Folders

//LC_Default Project Folders v1.0.0//

function defaultFolders() {
  
    app.beginUndoGroup("Default Project Folders");

    // Audio Folders
    var audio = app.project.items.addFolder("00 Audio");
    // Sub Comps
    var vo = app.project.items.addFolder("VO");
    var voArchive = app.project.items.addFolder("_Archive");
    var sfx = app.project.items.addFolder("SFX");
    var sfxArchive = app.project.items.addFolder("_Archive");
    var music = app.project.items.addFolder("Music");

    // Asset Folders
    var assets = app.project.items.addFolder("01 Assets");
    var assetsArchive = app.project.items.addFolder("_Archive");
    var assetsVideo = app.project.items.addFolder("Videos");
    var assetsAEP = app.project.items.addFolder("AEPs");

    // Graphics Folders
    var graphics = app.project.items.addFolder("02 Graphics");
    // Sub Comps
    var graphicArchive = app.project.items.addFolder("_Archive");
    var storyboardGraphics = app.project.items.addFolder("Storyboard");

    // Comps Folders
    var comps = app.project.items.addFolder("03 Comps");
    // Sub Comps
    var compsArchive = app.project.items.addFolder("_Archive");
    var pComps = app.project.items.addFolder("_pComps");
    var tests = app.project.items.addFolder("_Tests");

    // Parenting Comps //

    // Audio
    audio;
    // Sub Comps
    vo.parentFolder = audio;
    voArchive.parentFolder = audio;
    sfx.parentFolder = audio;
    music.parentFolder = audio;
    sfxArchive.parentFolder = audio;
    voArchive.parentFolder = vo;

    // Asset Folders
    assets;
    // Sub Comps
    assetsArchive.parentFolder = assets;
    assetsVideo.parentFolder = assets;
    assetsAEP.parentFolder = assets;
    
    // Graphics Folders
    graphics;
    // Sub Comps
    graphicArchive.parentFolder = graphics;
    storyboardGraphics.parentFolder = graphics;
    
    // Comps Folders
    comps;
    // Sub Comps
    compsArchive.parentFolder = comps;
    pComps.parentFolder = comps;
    tests.parentFolder = comps;

    app.endUndoGroup();

}

defaultFolders();