builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with the content lock set to it.");
oInlineLvlSdt.AddElement(oRun, 0);
oInlineLvlSdt.SetLock("sdtContentLocked");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oLock = oInlineLvlSdt.GetLock();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock type: " + oLock);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetLock.docx");
builder.CloseFile();