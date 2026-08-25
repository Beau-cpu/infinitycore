<%@ Language=VBScript %>
<% Option Explicit %>
<%
    Response.ContentType = "application/json"
    Dim fso, dataFolder, indexFile, indexJson
    Set fso = CreateObject("Scripting.FileSystemObject")
    dataFolder = Server.MapPath("data")
    indexFile = dataFolder & "\index.json"
    
    If Not fso.FileExists(indexFile) Then
        Response.Write "[]"
        Response.End
    End If
    
    Dim ts
    Set ts = fso.OpenTextFile(indexFile, 1)
    indexJson = ts.ReadAll
    ts.Close
    
    ' 解析 JSON 数组，并为每个代码读取 code.txt
    Dim indexArray, i, codeContent, codeFilePath
    indexArray = Eval("(" & indexJson & ")")
    For i = 0 To UBound(indexArray)
        codeFilePath = dataFolder & "\" & indexArray(i).id & "\code.txt"
        If fso.FileExists(codeFilePath) Then
            Set ts = fso.OpenTextFile(codeFilePath, 1)
            codeContent = ts.ReadAll
            ts.Close
            ' 替换双引号、换行等以便嵌入JSON
            codeContent = Replace(codeContent, "\", "\\")
            codeContent = Replace(codeContent, Chr(34), "\" & Chr(34))
            codeContent = Replace(codeContent, vbCrLf, "\n")
            codeContent = Replace(codeContent, vbCr, "\n")
            codeContent = Replace(codeContent, vbLf, "\n")
            indexArray(i).code = codeContent
        Else
            indexArray(i).code = "// 代码文件丢失"
        End If
    Next
    
    ' 输出 JSON
    Dim jsonOut
    jsonOut = "["
    For i = 0 To UBound(indexArray)
        If i > 0 Then jsonOut = jsonOut & ","
        jsonOut = jsonOut & "{"
        jsonOut = jsonOut & """id"":""" & indexArray(i).id & ""","
        jsonOut = jsonOut & """title"":""" & Replace(indexArray(i).title, """", "\""") & ""","
        jsonOut = jsonOut & """author"":""" & Replace(indexArray(i).author, """", "\""") & ""","
        jsonOut = jsonOut & """language"":""" & Replace(indexArray(i).language, """", "\""") & ""","
        jsonOut = jsonOut & """date"":""" & indexArray(i).date & ""","
        jsonOut = jsonOut & """code"":""" & indexArray(i).code & """"
        jsonOut = jsonOut & "}"
    Next
    jsonOut = jsonOut & "]"
    
    Response.Write jsonOut
%>