builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control with alias '№1.");
oBlockLvlSdt.AddElement(oParagraph, 0);
oBlockLvlSdt.SetAlias("№1");
oDocument.AddElement(0, oBlockLvlSdt);
var oDocContent = oBlockLvlSdt.GetContent();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a content of the container.");
oDocContent.AddElement(oParagraph);
oDocContent.Push(oParagraph);
builder.SaveFile("docx", "GetContent.docx");
builder.CloseFile();