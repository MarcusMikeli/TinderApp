function validateNewUser() {
    // Punkt 1: Sæt JS variable, til de værdier der er indtastet i HTML formen (DONE)
    var firstname = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var email = document.getElementById("user_email").value;
    // HVAD GØR JEG MED GENDER? var gender = document.getElementById("firstname").value;
    var birthday = document.getElementById("user_birthday").value;
    var psw = document.getElementById("user_psw").value;
    var pswRepeat = document.getElementById("user_psw_repeat").value;

    // Radio buttons er faktisk et array, hvor man kun kan vælge en mulighed så vi skal loope igennem for at tjekke om en radio button er checked

    var genderButtons = document.getElementsByClassName('user_gender'); 
    var len = ratingButtons.length;
    var userGender = "";
        
    // vi laver et loop og ser efter om rating button er checked med ".checked" keywordet
    // Hvis den er checked, så finder den valuen i den radio button
    var i = 0;
        
    var validGender = false;
        for (i=0; i<len; i++) {
            if (genderButtons[i].checked) {
                userGender = genderButtons[i].value;
            
                // vi tilføjer at variablen validRadio bliver sand, hvis en userRating er checked. 
                validGender = true;
            }
        }
        
    //Punkt 2: Valider formen - (Forbliver det samme!)
    var form_valid = true;
    var validation_message = "";
        
    //Punkt 3: Valider rating
        
        if(validRadio==false) {
    /* Med document.getElementByID, så tilgår vi det element som vi gerne vil displaye 
        
    med .innerHTML, så aktiverer vi en setter eller en getter, når vi bruger "=" tegnet 
    efterfulgt af en string, så betyder det at <p> tag'et med id'et validationTextRadio. 
    Bliver sat til den efterfølgende string. Men husk at vi nu er i html-element, hvorfor
    at vi ikke kan bruge \n syntaksen og i stedet bruger html <br/> tegnet. Samme koncept
    går igennem for alle validerignsmetoderne. */

        document.getElementById("validationTextGender").innerHTML = "You must check one of the Radio-Buttons (Lame/Mediocre/Awesome) <br/>";
            form_valid = false;
        } else {
    // Vi specificerer med en else statement'et, at hvis validRadio variablen indeholder booleanen true, 
    // så skal der ses bort fra <p> tag'et med id'et validationTextRadio
        document.getElementById("validationTextGender").innerHTML = null;
        }

    //Punkt 4: Valider first name
        if(firstname==null || firstname == "") {
            // Tilføjer en besked
            document.getElementById("validationTextFirstName").innerHTML = "You must fill in your first name <br/>"
            
            // sætter formen til false
            form_valid = false;
        } else { 
            // repeat
            document.getElementById("validationTextFirstName").innerHTML = null;
        }

    //Punkt 4: Valider first name
        if(lastname==null || lastname == "") {
            // Tilføjer en besked
            document.getElementById("validationTextLastName").innerHTML = "You must fill in your first name <br/>"
                
            // sætter formen til false
            form_valid = false;
        } else { 
            // repeat
            document.getElementById("validationTextLastName").innerHTML = null;
    }

    //Punkt 6: Valider E-mail
    // vi undnytter her .indexOf() og .lastIndexOf()-metoderne på vores email variabel  (se evt på w3 school)
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    
    if(atPos < 1 || dotPos> email.length-2 || dotPos<atPos) {
        document.getElementById("validationTextEmail").innerHTML = "Please put in a valid e-mail<br/>";
        form_valid = false;
    
    } else {
        document.getElementById("validationTextEmail").innerHTML = null;
    }

    //Punkt 8: Alert, hvis form_valid variablien indeholder booleanen true. Her indsætter vi blot alerten fra sidste gang.
        if(form_valid) {
    
    //Punkt 9 Alert hvis alt går godt (DONE) :        
    // Vi slutter funktionen af med at lave en alert besked for at se om alle de varible er blevet hentet ordenligt fra html dokumentet
            alert("Hi " + fullname + " " + lastname
                 + "\nGender: " + userGender
                 + "\nEmail: " + email);
                
        // Hvis form_valid = false, så skal dette retuneres
        } else {
            return false;    
        } 
            // vi retunerer form_valid tilbage om den er sand eller falsk.
            return (form_valid);
}
