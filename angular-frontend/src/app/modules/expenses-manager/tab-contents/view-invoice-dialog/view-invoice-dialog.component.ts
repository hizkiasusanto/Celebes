import {Component, Input, OnInit} from '@angular/core';
import {ImagesService} from "../../../../shared/services/images.service";
import {InvoicesService} from "../../services/invoices.service";
import {BackendResponse} from "../../../../shared/types/backendresponse";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-invoice-dialog',
  templateUrl: './view-invoice-dialog.component.html',
  styleUrls: ['./view-invoice-dialog.component.scss']
})
export class ViewInvoiceDialogComponent implements OnInit {
  @Input() invoiceId: string;
  invoiceImageUrl: string;

  constructor(
    private imagesService: ImagesService,
    private invoicesService: InvoicesService,
    private dialogRef: MatDialogRef<ViewInvoiceDialogComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.invoicesService.getInvoiceById(this.invoiceId).subscribe((res: BackendResponse) => {
      if (res.success) {
        this.invoiceImageUrl = this.imagesService.getInvoice(res.invoice.imageUrl);
      } else {
        this.snackBar.open(res.msg,'',{panelClass:['error-snackbar']})
        this.dialogRef.close()
      }
    })
  }

}
