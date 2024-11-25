import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texts: string[] = [
    'Jura student jobs',
    'Werkstudent  Jura',
  ];
  searchQuery: string = ''; 
  dynamicText: string = '';
  currentIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  cursorSign: string = '|';


  ngOnInit() {
    this.updateText();
    this.blinkCursor();
  }
  blinkCursor() {
    this.cursorSign = this.cursorSign === '|'? '' : '|';
    setTimeout(() => this.blinkCursor(), 500);
  }

  updateText() {
    const currentText = this.texts[this.currentIndex];
    const typingSpeed = this.isDeleting ? 200 :300;

    if (!this.isDeleting && this.charIndex < currentText.length) {
      // Ajoute des caractères
      this.dynamicText += currentText[this.charIndex];
      this.charIndex++;
    } else if (this.isDeleting && this.charIndex > 0) {
      // Supprime des caractères
      this.dynamicText = this.dynamicText.slice(0, -1);
      this.charIndex--;
    } else {
      // Change entre écriture et suppression
      this.isDeleting = !this.isDeleting;
      if (!this.isDeleting) {
        // Passe au texte suivant une fois la suppression terminée
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }
    }

    // Répète la fonction avec un délai
    setTimeout(() => this.updateText(), typingSpeed);
  }
}
