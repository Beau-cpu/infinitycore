<%@ Language=VBScript %>
<%
    Dim fso, testFile, msg
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    ' 尝试创建 data 文件夹并写入测试文件
    Dim dataFolder
    dataFolder = Server.MapPath("data")
    
    If Not fso.FolderExists(dataFolder) Then
        fso.CreateFolder(dataFolder)
        msg = "创建 data 文件夹成功<br>"
    Else
        msg = "data 文件夹已存在<br>"
    End If
    
    ' 尝试在 data 内创建 test.txt
    On Error Resume Next
    Set testFile = fso.CreateTextFile(dataFolder & "\test.txt", True)
    If Err.Number = 0 Then
        testFile.WriteLine "写入成功，时间：" & Now()
        testFile.Close
        msg = msg & "写入 test.txt 成功"
    Else
        msg = msg & "写入 test.txt 失败，错误号：" & Err.Number & "，请检查文件夹权限"
    End If
    On Error GoTo 0
    
    Response.Write msg
%>