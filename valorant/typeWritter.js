         /*eslint-env browser*/

         var wordsArray = ['UPDATES', 'PATCH NOTES 1.02 HIGHLIGHTS', 'NEW THEMES: larger selection of colors and themes to choose from. Our emailing function has been updated and now you can send out batches to your clients', 'MORE ACCESS: Because of the volume of demand revolving around the locked features the more commonly used features will now be unlocked for lower subscription users.', '@WILLEUJEANS//instagram//artstation..'];
         var t = 0;

         function typeContainer(wordsInput, spawnNum, speed) {
             var h = 0;
             var timeSet = speed;
             var time = timeSet;
             var words = ' ' + wordsInput;
             var letter = '';
             typeWriter();

             function typeWriter() {
                 var currentlyTyping = true;
                 var dialogueBox = (document.getElementById('typePaper_' + spawnNum));
                 letter = letter + words.charAt(h);
                 dialogueBox.innerHTML = letter;
                 if (words.charAt(h) == ' ') {
                     time = 3 * timeSet;
                 } else if (words.charAt(h) == ',') {
                     time = 3 * timeSet;
                 } else if (words.charAt(h) == '.') {
                     time = 3 * timeSet;
                 } else {
                     time = timeSet;
                 }
                 if (h < words.length) {
                     var typeWritterLoop = setTimeout(typeWriter, time);
                 } else if (h >= words.length) {
                     h = 0;
                     currentlyTyping = false;
                     letter = '';
                     clearTimeout(typeWritterLoop);
                 }
                 h++;
             }

         }

         function typeController() {
             var speedByCount = wordsArray[t].length
             typeContainer(wordsArray[t], t, (900 / (speedByCount * .45)));
             t++;
             if (t < 5) {
                 var typeControllerLoop = setTimeout(typeController, 3000);
             } else {
                 clearTimeout(typeControllerLoop);
             }
         }

         typeController();

         function loadingText() {
             var loadingArray = ['--', "\\", '|', '/', '--', "\\", '|', '/'];
             var loopCount = 0;
             loadingLoop();

             function loadingLoop() {
                 if (loopCount > 7) {
                     loopCount = 0;
                 }
                 var loadingBox = (document.getElementById('loadingBox'));
                 loadingBox.innerHTML = loadingArray[loopCount];
                 loopCount++;
                 setTimeout(loadingLoop, 500);
             }
         }

         loadingText();
