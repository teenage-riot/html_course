if ($args.Count -eq 0) {
  Write-Host "Вы не передали аргумент. Используйте: .\makedir.ps1 <номер_урока>"
} else {
  # Получаем имя папки из аргумента командной строки
  $folderName = "css_" + $args[0]

  if (-not (Test-Path $folderName)) {
    # Создать папку, если она не существует
    New-Item -ItemType Directory -Path $folderName

    # Указываем путь к файлу
    $filePath = Join-Path -Path $folderName -ChildPath "index.html"

    # Создаем файл
    New-Item -ItemType File -Path $filePath -Force

    # Добавляем текст в файл
    Add-Content -Path $filePath -Value "<!DOCTYPE html>"
    Add-Content -Path $filePath -Value "<html lang=`"ru`">"
    Add-Content -Path $filePath -Value ""
    Add-Content -Path $filePath -Value "<head>"
    Add-Content -Path $filePath -Value "  <meta charset=`"UTF-8`">"
    Add-Content -Path $filePath -Value "  <meta http-equiv=`"X-UA-Compatible`" content=`"IE=edge`">"
    Add-Content -Path $filePath -Value "  <meta name=`"viewport`" content=`"width=device-width, initial-scale=1.0`">"
    Add-Content -Path $filePath -Value "  <link rel=`"shortcut icon`" href=`"../favicon.ico`" type=`"image/x-icon`">"
    Add-Content -Path $filePath -Value "  <link rel=`"stylesheet`" href=`"css/reset.css`">"
    Add-Content -Path $filePath -Value "  <link rel=`"stylesheet`" href=`"css/styles.css`">"
    Add-Content -Path $filePath -Value ("  <title>CSS lesson {0}</title>" -f $args[0])
    Add-Content -Path $filePath -Value "</head>"
    Add-Content -Path $filePath -Value ""
    Add-Content -Path $filePath -Value "<body>"
    Add-Content -Path $filePath -Value "  "
    Add-Content -Path $filePath -Value "</body>"
    Add-Content -Path $filePath -Value ""
    Add-Content -Path $filePath -Value "</html>"

    # Указываем путь к файлу внутри созданной папки
    $filePath = Join-Path -Path $folderName -ChildPath "css\styles.css"

    # Создаём файл
    New-Item -ItemType File -Path $filePath -Force

    # Копируем css-file
    $sourceFilePath = "reset.css"
    $destinationFilePath = Join-Path -Path $folderName -ChildPath "css\reset.css"
    Copy-Item -Path $sourceFilePath -Destination $destinationFilePath

    Write-Host "Папка '$folderName' успешно создана."    
  } else {
      Write-Host "Папка '$folderName' уже существует."
  }
}
