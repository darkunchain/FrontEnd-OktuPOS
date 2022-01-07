import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-pos',
  templateUrl: './print-pos.component.html',
  styleUrls: ['./print-pos.component.css']
})
export class PrintPosComponent {

  constructor() { }

  name = "Angular";

  print() {
    let printContents:any=0
    let popupWin:any=0;

    printContents = document.getElementById("imprime")!.innerHTML.toString();

    printContents = (<string>printContents + "").replace("col-sm", "col-xs");
    // console.log(printContents);
    popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Reporte</title>
          <meta name="viewport" content="width=100, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        </head>
        <body onload="window.print();">
          ${printContents}
        </body>
      </html>`);
    /* window.close(); */
    popupWin.document.close();
  }


}
