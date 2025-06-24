import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPDF = async (ref) => {
    const pdf = new jsPDF("p", "pt", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < ref.current.length; i++) {
      const element = ref.current[i];

      // Skip if ref is null
      if (!element) continue;

      const canvas = await html2canvas(element, { scale: 5, useCORS: true });
      const imgData = canvas.toDataURL("image/jpeg", 0.7);;

      const imgProps = {
        width: canvas.width,
        height: canvas.height,
      };

      const ratio = Math.min(
        pdfWidth / imgProps.width,
        pdfHeight / imgProps.height
      );
      const imgWidth = imgProps.width * ratio;
      const imgHeight = imgProps.height * ratio;

      if (i !== 0) pdf.addPage();

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("Oqulix-Quotation.pdf");
  };
