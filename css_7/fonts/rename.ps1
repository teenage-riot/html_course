# Получаем список файлов в текущем каталоге
$fileList = Get-ChildItem

# Проходимся по каждому файлу
foreach ($file in $fileList) {
    # Проверяем, содержит ли имя файла строку "AnyConv.com__" и "-trial"
    if ($file.Name -match "AnyConv.com__" -and $file.Name -match "-trial") {
        # Удаляем строку "AnyConv.com__" и "-trial" из имени файла и переименовываем его
        $newFileName = $file.Name -replace "AnyConv.com__", "" -replace "-trial", ""
        Rename-Item -Path $file.FullName -NewName $newFileName -Force
    }
}
