<%@ Language=VBScript %>
<% Option Explicit %>
<%
    Response.ContentType = "application/json"
    Dim input, id, fso, dataFolder, targetFolder, indexFile, indexJson, newList, ts
    
    ' 获取 POST 数据
    input = Request.Form("json") ' 前端发送的是 JSON 字符串，需要自己解析
    If input = "" Then
        ' 尝试从 request body 读取
        Dim postData
        postData = Request.BinaryRead(Request.TotalBytes)
        If Not IsNull(postData) Then
            input = BytesToStr(postData)
        End If
    End If
    
    ' 简单解析 JSON 获取 id
    Dim regex
    Set regex = New RegExp
    regex.Pattern = """id"":""([^""]+)"""
    regex.Global = False
    Dim matches
    Set matches = regex.Execute(input)
    If matches.Count > 0 Then
        id = matches(0).SubMatches(0)
    Else
        Response.Status = "400 Bad Request"
        Response.Write "{""error"":""缺少ID""}"
        Response.End
    End If
    
    Set fso = CreateObject("Scripting.FileSystemObject")
    dataFolder = Server.MapPath("data")
    targetFolder = dataFolder & "\" & id
    
    If Not fso.FolderExists(targetFolder) Then
        Response.Status = "404 Not Found"
        Response.Write "{""error"":""代码不存在""}"
        Response.End
    End If
    
    ' 递归删除文件夹
    Call DeleteFolderRecursive(targetFolder)
    
    ' 更新索引文件
    indexFile = dataFolder & "\index.json"
    If fso.FileExists(indexFile) Then
        Set ts = fso.OpenTextFile(indexFile, 1)
        indexJson = ts.ReadAll
        ts.Close
        Dim indexArray, i
        indexArray = Eval("(" & indexJson & ")")
        newList = "["
        For i = 0 To UBound(indexArray)
            If indexArray(i).id <> id Then
                If newList <> "[" Then newList = newList & ","
                newList = newList & "{"
                newList = newList & """id"":""" & indexArray(i).id & ""","
                newList = newList & """title"":""" & Replace(indexArray(i).title, """", "\""") & ""","
                newList = newList & """author"":""" & Replace(indexArray(i).author, """", "\""") & ""","
                newList = newList & """language"":""" & Replace(indexArray(i).language, """", "\""") & ""","
                newList = newList & """date"":""" & indexArray(i).date & ""","
                newList = newList & """timestamp"":" & indexArray(i).timestamp
                newList = newList & "}"
            End If
        Next
        newList = newList & "]"
        Set ts = fso.CreateTextFile(indexFile, True)
        ts.Write newList
        ts.Close
    End If
    
    Response.Write "{""success"":true}"
    
    ' 辅助函数：递归删除文件夹
    Sub DeleteFolderRecursive(folderPath)
        Dim subFolder, file
        For Each subFolder In fso.GetFolder(folderPath).SubFolders
            DeleteFolderRecursive subFolder.Path
        Next
        For Each file In fso.GetFolder(folderPath).Files
            file.Delete
        Next
        fso.DeleteFolder(folderPath)
    End Sub
    
    Function BytesToStr(bytes)
        Dim stream
        Set stream = CreateObject("ADODB.Stream")
        stream.Type = 2 ' text
        stream.Open
        stream.WriteText bytes
        stream.Position = 0
        stream.Charset = "utf-8"
        BytesToStr = stream.ReadText
        stream.Close
        Set stream = Nothing
    End Function
%>