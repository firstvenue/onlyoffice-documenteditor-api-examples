builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Table = Api.CreateTable(2, 4);
var Row = Table.GetRow(0);
var Cell = Row.GetCell(0);
var Content = Cell.GetContent();
var Paragraph = Api.CreateParagraph();
var ClassType = Table.GetClassType();
Paragraph.AddText("Class type: " + ClassType);
Content.Push(Paragraph);
var Slide = Presentation.GetSlideByIndex(0);
Slide.RemoveAllObjects();
Slide.AddObject(Table);
builder.SaveFile("pptx", "GetClassType.pptx");
builder.CloseFile();