builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oBullet = Api.CreateBullet("-");
oParagraph.SetBullet(oBullet);
oParagraph.AddText("This is an example of the bulleted paragraph.");
builder.SaveFile("docx", "CreateBullet.docx");
builder.CloseFile();
