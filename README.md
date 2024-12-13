# TicTacToe

This project has been built with LM Studio using Qwen2.5 model.

Here is my first prompt : Can you build a tic tact oe game with Angular framework. You must split domain part in service files, and presentation part in components. The game must the beautiful.
The result was already working but not looks like as expected about code.

Here is my second prompt : peux tu corriger le code du template pour utiliser le nouveau control flow : @for au lieu du ngFor
I moved on french... The result was not working because it did a mistake about @for syntax, using let keyword whereas it's forbidden. I fixed it and send it the correction. It will never do the mistake again

Here is my third prompt : Il manque par contre le calcul du gagnant. Je veux donc que dès qu'il y a un gagnant, le jeu s'arrete.
Un joueur est déclaré gagnant lorsqu'il a 3 cases cotes à cotes cochés. C'est à dire 3 verticales, 3 horizontales, ou 3 en diagonales.
And now, it manages the winner declaration.

Here is my fourth prompt : 1. il manque aussi la détection d'une partie nulle. Si aucun gagnant n'est déclaré à la fin de la partie, tu dois indiquer que personne n'a gagné
2. il faudrait que la condition qui permet de déterminer si on doit ajouter la classe css winning soit externalisé dans une méthode du composant qui s'appelerai hasAWinner
3. il faut tester le service et le composant
The draw game is now managed. I also have tests, but they are buggy. I have to fix them, but it's quite easy.

I'm almost satisfied by this first try.

Here is my setup :
* Laptop Rizen 7 6800H
* RTX 3070 8G
* 16Gb RAM
* SSD

It's almost loudy when the LLM is working, but it's quite fast to generate the response
