builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCellsCount = oRow.GetCellsCount();
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The number of cells in the row: " + oCellsCount);
oContent.Push(oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "GetCellsCount.pptx");
builder.CloseFile();