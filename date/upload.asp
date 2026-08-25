<%@ Language=VBScript %>
<% Option Explicit %>
<%
    Response.ContentType = "application/json"
    Dim title, author, language, code
    title = Request.Form("title")
    author = Request.Form("author")
    language = Request.Form("language")
    code = Request.Form("code")
    
    If title = "" Or code = "" Then
        Response.Status = "400 Bad Request"
        Response.Write "{""error"":""标题和代码不能为空""}"
        Response.End
    End If
    
    ' 生成唯一ID
    Dim id, nowDate
    id = Replace(Now(), "/", "") & Replace(Replace(Now(), ":", ""), " ", "") & Int(Rnd * 1000)
    id = Replace(id, "-", "") & Int(Timer * 1000)
    id = Left(id, 20) ' 简单唯一
    
    Dim fso, dataFolder, snippetFolder
    Set fso = CreateObject("Scripting.FileSystemObject")
    dataFolder = Server.MapPath("data")
    
    ' 如果data文件夹不存在则创建
    If Not fso.FolderExists(dataFolder) Then
        fso.CreateFolder(dataFolder)
    End If
    
    snippetFolder = dataFolder & "\" & id
    fso.CreateFolder(snippetFolder)
    
    ' 保存代码内容到 code.txt
    Dim codeFile
    Set codeFile = fso.CreateTextFile(snippetFolder & "\code.txt", True)
    codeFile.Write code
    codeFile.Close
    
    ' 保存元数据到 meta.json
    Dim metaFile, json
    Set metaFile = fso.CreateTextFile(snippetFolder & "\meta.json", True)
    json = "{""id"":""" & id & """,""title"":""" & Replace(title, """", "\""") & """,""author"":""" & Replace(author, """", "\""") & """,""language"":""" & Replace(language, """", "\""") & """,""date"":""" & Now() & """,""timestamp"":" & CLng(Timer) & "}"
    metaFile.Write json
    metaFile.Close
    
    ' 更新索引文件 index.json
    Dim indexFile, indexJson, indexArray, newIndex
    indexFile = dataFolder & "\index.json"
    If fso.FileExists(indexFile) Then
        Dim ts
        Set ts = fso.OpenTextFile(indexFile, 1) ' 读取
        indexJson = ts.ReadAll
        ts.Close
        If indexJson <> "" Then
            indexArray = Eval("(" & indexJson & ")")
        Else
            indexArray = Array()
        End If
    Else
        indexArray = Array()
    End If
    
    ' 将新记录插入数组头部
    Dim newMeta
    newMeta = "{""id"":""" & id & """,""title"":""" & Replace(title, """", "\""") & """,""author"":""" & Replace(author, """", "\""") & """,""language"":""" & Replace(language, """", "\""") & """,""date"":""" & Now() & """,""timestamp"":" & CLng(Timer) & "}"
    ' 由于VBScript数组操作较繁琐，我们直接重新构造JSON字符串
    Dim newList
    newList = "[" & newMeta
    For i = 0 To UBound(indexArray)
        newList = newList & "," & indexArray(i)
    Next
    newList = newList & "]"
    
    ' 保存索引文件
    Dim outFile
    Set outFile = fso.CreateTextFile(indexFile, True)
    outFile.Write newList
    outFile.Close
    
    Response.Write "{""success"":true,""id"":""" & id & """}"
%>