function preload() {
  bg = loadImage('images/BG.png');
  cursorSprite = loadImage('images/cursor_sprite.png');
  eyeSprite = loadImage('images/eye_sprite_116.png');
  fur01Sprite = loadImage('images/fur01_sprite_123.png');
  fur02Sprite = loadImage('images/fur02_sprite_98.png');
  fur03Sprite = loadImage('images/fur03_sprite_124.png');
  fur04Sprite = loadImage('images/fur04_sprite_120.png');
  threeKingsSprite = loadImage('images/threeKings_sprite_425.png');
  sheepSprite = loadImage('images/sheep_sprite_249.png');
  jesusSprite = loadImage('images/jesus_sprite_450.png');
  horseSprite = loadImage('images/horse_sprite_279.png');
  angelSprite = loadImage('images/angel_sprite_252.png');
  lightSprite = loadImage('images/light_sprite_533.png');
}


var sc = 0.5;

var cursorW = 150 * sc;
var cursorIdx = 0;

var eyePos = [460 * sc, 125 * sc];
var eyeW = 116 * sc;
var eyeIdx = 0;
var eyeMode = 'closed';

var fur01Pos = [250 * sc, 750 * sc];
var fur01W = 123 * sc;
var fur01Idx = 7;

var fur02Pos = [600 * sc, 1020 * sc];
var fur02W = 98 * sc;
var fur02Idx = 7;

var fur03Pos = [900 * sc, 920 * sc];
var fur03W = 124 * sc;
var fur03Idx = 7;

var fur04Pos = [830 * sc, 375 * sc];
var fur04W = 120 * sc;
var fur04Idx = 7;

var threeKingsPos = [685 * sc, 980 * sc];
var threeKingsW = 425 * sc;
var threeKingsIdx = 17;

var sheepPos = [330 * sc, 960 * sc];
var sheepW = 249 * sc;
var sheepIdx = 17;

var jesusPos = [470 * sc, 600 * sc];
var jesusW = 450 * sc;
var jesusIdx = 17;

var horsePos = [775 * sc, 493 * sc];
var horseW = 279 * sc;
var horseIdx = 17;

var angelPos = [380 * sc, 450 * sc];
var angelW = 252 * sc;
var angelIdx = 17;

var lightPos = [400 * sc, 580 * sc];
var lightW = 533 * sc;
var lightIdx = 8;


function setup() {
  createCanvas(1080 * sc, 1920 * sc);
  noCursor();

  bg.loadPixels();
  cursorSprite.loadPixels();
  eyeSprite.loadPixels();
  fur01Sprite.loadPixels();
  fur02Sprite.loadPixels();
  fur03Sprite.loadPixels();
  fur04Sprite.loadPixels();
  threeKingsSprite.loadPixels();
  sheepSprite.loadPixels();
  jesusSprite.loadPixels();
  horseSprite.loadPixels();
  angelSprite.loadPixels();
  lightSprite.loadPixels();

}


function draw() {
  background(220);
  frameRate(24);




  image(bg, 0, 0, width, height);


  image(eyeSprite, eyePos[0], eyePos[1], eyeW, eyeW, eyeIdx * eyeW / sc, 0, eyeW / sc, eyeW / sc);
  image(angelSprite, angelPos[0], angelPos[1], angelW, angelW, angelIdx * angelW / sc, 0, angelW / sc, angelW / sc);

  image(horseSprite, horsePos[0], horsePos[1], horseW, horseW, horseIdx * horseW / sc, 0, horseW / sc, horseW / sc);

  image(jesusSprite, jesusPos[0], jesusPos[1], jesusW, jesusW, jesusIdx * jesusW / sc, 0, jesusW / sc, jesusW / sc);

  image(sheepSprite, sheepPos[0], sheepPos[1], sheepW, sheepW, sheepIdx * sheepW / sc, 0, sheepW / sc, sheepW / sc);

  image(threeKingsSprite, threeKingsPos[0], threeKingsPos[1], threeKingsW, threeKingsW, threeKingsIdx * threeKingsW / sc, 0, threeKingsW / sc, threeKingsW / sc);

  image(fur01Sprite, fur01Pos[0], fur01Pos[1], fur01W, fur01W, fur01Idx * fur01W / sc, 0, fur01W / sc, fur01W / sc);

  image(fur02Sprite, fur02Pos[0], fur02Pos[1], fur02W, fur02W, fur02Idx * fur02W / sc, 0, fur02W / sc, fur02W / sc);

  image(fur03Sprite, fur03Pos[0], fur03Pos[1], fur03W, fur03W, fur03Idx * fur03W / sc, 0, fur03W / sc, fur03W / sc);

  image(fur04Sprite, fur04Pos[0], fur04Pos[1], fur04W, fur04W, fur04Idx * fur04W / sc, 0, fur04W / sc, fur04W / sc);

  image(lightSprite, lightPos[0], lightPos[1], lightW, lightW, lightIdx * lightW / sc, 0, lightW / sc, lightW / sc);

  image(cursorSprite, mouseX - cursorW * 0.25, mouseY - cursorW * 0.25, cursorW, cursorW, cursorIdx * cursorW / sc, 0, cursorW / sc, cursorW / sc);



  if (eyeMode == 'closed') {
    if (random() > 0.95) {
      eyeMode = 'opening';
    }
  } else if (eyeMode == 'opening' && eyeIdx < 3) {
    eyeIdx++;
  } else if (eyeMode == 'opening' && eyeIdx == 3) {
    eyeMode = 'opened';
  } else if (eyeMode == 'opened') {
    if (random() > 0.95) {
      eyeMode = 'closing';
    }
  } else if (eyeMode == 'closing' && eyeIdx > 0) {
    eyeIdx = eyeIdx - 1;
  } else if (eyeMode == 'closing' && eyeIdx == 0) {
    eyeMode = 'closed';
  }

  if (mouseX >= fur01Pos[0] && mouseX <= (fur01Pos[0] + fur01W) &&
    mouseY >= fur01Pos[1] && mouseY <= (fur01Pos[1] + fur01W)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }

    if (fur01Idx == 7) {
      fur01Idx = 0;
    } else if (fur01Idx >= 0 && fur01Idx < 3) {
      fur01Idx++;
    } else if (fur01Idx > 3 && fur01Idx < 7) {
      fur01Idx = 8 - fur01Idx;
    }
  } else if (mouseX < fur01Pos[0] || mouseX > (fur01Pos[0] + fur01W) ||
    mouseY < fur01Pos[1] || mouseY > (fur01Pos[1] + fur01W)) {
    if (fur01Idx >= 3 && fur01Idx < 7) {
      fur01Idx++;
    } else if (fur01Idx >= 0 && fur01Idx < 3) {
      fur01Idx++;
    }
  }

  if (mouseX >= fur02Pos[0] && mouseX <= (fur02Pos[0] + fur02W) &&
    mouseY >= fur02Pos[1] && mouseY <= (fur02Pos[1] + fur02W)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (fur02Idx == 7) {
      fur02Idx = 0;
    } else if (fur02Idx >= 0 && fur02Idx < 3) {
      fur02Idx++;
    } else if (fur02Idx > 3 && fur02Idx < 7) {
      fur02Idx = 8 - fur02Idx;
    }
  } else if (mouseX < fur02Pos[0] || mouseX > (fur02Pos[0] + fur02W) ||
    mouseY < fur02Pos[1] || mouseY > (fur02Pos[1] + fur02W)) {
    if (fur02Idx >= 3 && fur02Idx < 7) {
      fur02Idx++;
    } else if (fur02Idx >= 0 && fur02Idx < 3) {
      fur02Idx++;
    }
  }

  if (mouseX >= fur03Pos[0] && mouseX <= (fur03Pos[0] + fur03W) &&
    mouseY >= fur03Pos[1] && mouseY <= (fur03Pos[1] + fur03W)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (fur03Idx == 7) {
      fur03Idx = 0;
    } else if (fur03Idx >= 0 && fur03Idx < 3) {
      fur03Idx++;
    } else if (fur03Idx > 3 && fur03Idx < 7) {
      fur03Idx = 8 - fur03Idx;
    }
  } else if (mouseX < fur03Pos[0] || mouseX > (fur03Pos[0] + fur03W) ||
    mouseY < fur03Pos[1] || mouseY > (fur03Pos[1] + fur03W)) {
    if (fur03Idx >= 3 && fur03Idx < 7) {
      fur03Idx++;
    } else if (fur03Idx >= 0 && fur03Idx < 3) {
      fur03Idx++;
    }
  }

  if (mouseX >= fur04Pos[0] && mouseX <= (fur04Pos[0] + fur04W) &&
    mouseY >= fur04Pos[1] && mouseY <= (fur04Pos[1] + fur04W)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (fur04Idx == 7) {
      fur04Idx = 0;
    } else if (fur04Idx >= 0 && fur04Idx < 3) {
      fur04Idx++;
    } else if (fur04Idx > 3 && fur04Idx < 7) {
      fur04Idx = 8 - fur04Idx;
    }
  } else if (mouseX < fur04Pos[0] || mouseX > (fur04Pos[0] + fur04W) ||
    mouseY < fur04Pos[1] || mouseY > (fur04Pos[1] + fur04W)) {
    if (fur04Idx >= 3 && fur04Idx < 7) {
      fur04Idx++;
    } else if (fur04Idx >= 0 && fur04Idx < 3) {
      fur04Idx++;
    }
  }

  if (mouseX >= threeKingsPos[0] && mouseX <= (threeKingsPos[0] + threeKingsW) &&
    mouseY >= threeKingsPos[1] && mouseY <= (threeKingsPos[1] + threeKingsW)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (threeKingsIdx == 17) {
      threeKingsIdx = 0;
    } else if (threeKingsIdx >= 0 && threeKingsIdx < 9) {
      threeKingsIdx++;
    } else if (threeKingsIdx > 9 && threeKingsIdx < 17) {
      threeKingsIdx = 18 - threeKingsIdx;
    }
  } else if (mouseX < threeKingsPos[0] || mouseX > (threeKingsPos[0] + threeKingsW) ||
    mouseY < threeKingsPos[1] || mouseY > (threeKingsPos[1] + threeKingsW)) {
    if (threeKingsIdx >= 9 && threeKingsIdx < 17) {
      threeKingsIdx++;
    } else if (threeKingsIdx >= 0 && threeKingsIdx < 9) {
      threeKingsIdx++;
    }
  }

  if (mouseX >= sheepPos[0] && mouseX <= (sheepPos[0] + sheepW) &&
    mouseY >= sheepPos[1] && mouseY <= (sheepPos[1] + sheepW)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (sheepIdx == 17) {
      sheepIdx = 0;
    } else if (sheepIdx >= 0 && sheepIdx < 9) {
      sheepIdx++;
    } else if (sheepIdx > 9 && sheepIdx < 17) {
      sheepIdx = 18 - sheepIdx;
    }
  } else if (mouseX < sheepPos[0] || mouseX > (sheepPos[0] + sheepW) ||
    mouseY < sheepPos[1] || mouseY > (sheepPos[1] + sheepW)) {
    if (sheepIdx >= 9 && sheepIdx < 17) {
      sheepIdx++;
    } else if (sheepIdx >= 0 && sheepIdx < 9) {
      sheepIdx++;
    }
  }

  if (mouseX >= jesusPos[0] && mouseX <= (jesusPos[0] + jesusW) &&
    mouseY >= jesusPos[1] && mouseY <= (jesusPos[1] + jesusW)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (jesusIdx == 17) {
      jesusIdx = 0;
    } else if (jesusIdx >= 0 && jesusIdx < 9) {
      jesusIdx++;
    } else if (jesusIdx > 9 && jesusIdx < 17) {
      jesusIdx = 18 - jesusIdx;
    }
  } else if (mouseX < jesusPos[0] || mouseX > (jesusPos[0] + jesusW) ||
    mouseY < jesusPos[1] || mouseY > (jesusPos[1] + jesusW)) {
    if (jesusIdx >= 9 && jesusIdx < 17) {
      jesusIdx++;
    } else if (jesusIdx >= 0 && jesusIdx < 9) {
      jesusIdx++;
    }
  }

  if (mouseX >= horsePos[0] && mouseX <= (horsePos[0] + horseW) &&
    mouseY >= horsePos[1] && mouseY <= (horsePos[1] + horseW)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (horseIdx == 17) {
      horseIdx = 0;
    } else if (horseIdx >= 0 && horseIdx < 9) {
      horseIdx++;
    } else if (horseIdx > 9 && horseIdx < 17) {
      horseIdx = 18 - horseIdx;
    }
  } else if (mouseX < horsePos[0] || mouseX > (horsePos[0] + horseW) ||
    mouseY < horsePos[1] || mouseY > (horsePos[1] + horseW)) {
    if (horseIdx >= 9 && horseIdx < 17) {
      horseIdx++;
    } else if (horseIdx >= 0 && horseIdx < 9) {
      horseIdx++;
    }
  }

  if (mouseX >= angelPos[0] && mouseX <= (angelPos[0] + angelW) &&
    mouseY >= angelPos[1] && mouseY <= (angelPos[1] + angelW)) {

    if (frameCount % 4 == 0) {
      if (cursorIdx == 0) {
        cursorIdx = 1;
      } else {
        cursorIdx = 0;
      }
    }
    if (angelIdx == 17) {
      angelIdx = 0;
    } else if (angelIdx >= 0 && angelIdx < 9) {
      angelIdx++;
    } else if (angelIdx > 9 && angelIdx < 17) {
      angelIdx = 18 - angelIdx;
    }
  } else if (mouseX < angelPos[0] || mouseX > (angelPos[0] + angelW) ||
    mouseY < angelPos[1] || mouseY > (angelPos[1] + angelW)) {
    if (angelIdx >= 9 && angelIdx < 17) {
      angelIdx++;
    } else if (angelIdx >= 0 && angelIdx < 9) {
      angelIdx++;
    }
  }

  if (frameCount % 2 == 0) {
    if (jesusIdx == 9) {
      if (lightIdx <= 8 && lightIdx > 0) {
        lightIdx = lightIdx - 1;
      } else if (lightIdx == 0) {
        lightIdx = 4;
      }
    } else {
      if (lightIdx >= 0 & lightIdx < 8) {
        lightIdx = lightIdx + 1;
      }
    }
  }

}
