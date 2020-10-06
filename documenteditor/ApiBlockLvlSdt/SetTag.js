builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control with a tag set to it.");
oBlockLvlSdt.AddElement(oParagraph, 0);
oBlockLvlSdt.SetTag("This is a tag.");
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "SetTag.docx");
builder.CloseFile();