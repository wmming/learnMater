


FileTypesMan v1.61
Copyright (c) 2008 - 2011 Nir Sofer
Web site: http://www.nirsoft.net



Description
===========

FileTypesMan is an alternative to the 'File Types' tab in the 'Folder
Options' of Windows. It displays the list of all file extensions and
types registered on your computer. For each file type, the following
information is displayed: Type Name, Description, MIME Type, Perceived
Type, Flags, Browser Flags, and more.
FileTypesMan also allows you to easily edit the properties and flags of
each file type, as well as it allows you to add, edit, and remove actions
in a file type.



System Requirements
===================

This utility works on any version of Windows from Windows 98 to Windows
7. For using this utility under Windows 98/ME, you must download the
non-Unicode version. For using this utility under x64 system, you should
download the x64 version.



Known Issue In Windows 98/ME
============================

In some Windows 98 machines, an exception with CDFVIEW.DLL is occurred
when starting FileTypesMan. To avoid this problem, go to the Options
menu, and choose the 'Don't Load Icons' option. After that, FileTypesMan
should work properly, but without displaying the icons according to file
types.

Versions History
================


* Version 1.61:
  o Added 'Mark Odd/Even Rows' option, under the View menu. When it's
    turned on, the odd and even rows are displayed in different color, to
    make it easier to read a single line.

* Version 1.60:
  o Added 'Add Header Line To CSV/Tab-Delimited File' option. When
    this option is turned on, the column names are added as the first
    line when you export to csv or tab-delimited file.

* Version 1.58:
  o Fixed issue: Removed the wrong encoding from the xml string,
    which caused problems to some xml viewers.

* Version 1.57:
  o Added 'Hide Dot In Extension' option. When this option is turned
    on, the preceding dot is not displayed in the extension column.

* Version 1.56:
  o Fixed icons problem on Windows7/x64.

* Version 1.55:
  o Fixed issue: When UserChoice is selected, FileTypesMan now
    displays the right file type properties loaded from the UserChoice
    application key.
  o Fixed issue: When UserChoice is selected, the 'Open File Type In
    RegEdit' option now opens the right UserChoice application key.

* Version 1.53:
  o When UserChoice is selected for specific extension in Windows
    7/Vista, FileTypesMan now display the actions of the UserChoice
    instead of the actions of the file type/extension.

* Version 1.52:
  o Added command-line options to save the types/extensions list into
    html/text/xml/csv file.

* Version 1.51:
  o Added 'Choose Icon' dialog-box like in the file types manager of
    Windows, to allow you to easily choose the desired file type icon.
    (Works only on Windows XP or greater)

* Version 1.50:
  o Added the option to select one or more file extensions, and then
    send the information to extension.nirsoft.net Web site. This Web site
    collects a general statistics information about file extensions and
    allows you to find out which programs can open the desired file
    extension.
  o Added 'View Extension In extension.nirsoft.net' option, so you
    can view the extensions information submitted by other users of
    FileTypesMan utility.
  o Added version information columns for the extension, according to
    the dll/exe of the file-type icon.

* Version 1.45:
  o Added version information columns in the actions table - Product
    Name, Product Version, Product Description, and Company Name.

* Version 1.42:
  o Added 'Extended' property to action dialog-box. When this
    property is turned on, the menu item will be displayed only if you
    press the Shift key.

* Version 1.41:
  o Added 'Jump To User Choice Entry' option - for file types with
    'User Choice' in Windows Vista/7.

* Version 1.40:
  o Added application entries. (Stored in
    HKEY_CLASSES_ROOT\Applications)
  o Added support for 'UserChoice' entries in Windows Vista/7 (Stored
    in
    HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Fi
    leExts\[.extension]\UserChoice). User Choice option is used when you
    right click on a file, and choose the default program (Open With ->
    Choose Default Program). UserChoice overwrites the default action
    when you double-click the file.
  o Added 'File Type Group' column - Standard, Perceived Type, URL
    Protocol, or Application.

* Version 1.30:
  o Added support for actions under
    HKEY_CLASSES_ROOT\SystemFileAssociations key.
  o Added 'SystemFileAssociations' column for actions.
  o Added 'Registry Key' column for actions.
  o Added 'Extract Resource Captions' option - For actions that their
    captions are stored inside a resource (For example:
    '@%SystemRoot%\system32\stobject.dll,-417') this option automatically
    loads the real caption from the resource file and displays it in the
    caption column.

* Version 1.21:
  o Fixed bug: Adding new extension didn't work if the user didn't
    specify the extension name with a dot prefix.
  o Added more accelerator keys.

* Version 1.20:
  o Added support for creating and deleting file extensions.
  o A few bugs fixed.

* Version 1.11:
  o Added more accelerator keys.

* Version 1.10:
  o Added support for perceived types (video, audio, image, text, and
    system)
  o Added 'Open Action In RegEdit' option.
  o Added 'Open File Type In RegEdit' option.

* Version 1.08 - The dialog-boxes are now resizable.
* Version 1.07 - Added new option: Select Another Font.
* Version 1.06 - Fixed bug: The main window lost the focus when the
  user switched to another application and then returned back to
  FileTypesMan.
* Version 1.05 - Added support for URL protocols. (Options->Show URL
  Protocols)
* Version 1.04 - Added support for saving to comma-delimited file.
* Version 1.03 - Added 'Always Show Extension' column.
* Version 1.02 - Fixed bug: FileTypesMan failed to add the first action
  in a file type.
* Version 1.01 - Fixed critical bug under Windows 98 - Icons
  disappeared in the 'start' menu.
* Version 1.00 - First release.



Start Using FileTypesMan
========================

FileTypesMan doesn't require any installation process or additional DLL
files. In order to start using it, simply copy the executable file
(FileTypesMan.exe) to any folder you like, and run it.
After running it, you should wait a few seconds until the file types list
is loaded. If the loading process is too slow, it's recommended to turn
off the icons loading (Options->Don't Load Icons in menu), so in the next
time that you run FileTypesMan, the loading process will be faster.
The main window of FileTypesMan contains 2 panes. The upper pane displays
the list of all extensions/file types registered on your computer. When
you select a single file type in the upper pane, the lower pane displays
the list of all actions of the selected type.



'Replace File Type For Selected Extension' option (F4)
======================================================

Sometimes, when you install a new software, it automatically replaces the
file types associated with various file extensions. This means that when
you double-click the file, the new installed application is opened,
instead of the old one. The icon of the extension is usually also
replaced to the icon of the new application.
The 'Replace File Type' feature allows you to set the file extension back
to the original file type. In order to do that, select the desired file
extension in the main window of FileTypesMan, and press F4. You'll get a
long list of available file types on your computer. Find and select the
previous file type that handled the extension, and choose 'Ok'.



Desktop Refresh
===============

Each time that you make a change in the properties of a file type,
FileTypesMan automatically initiate a general desktop refresh, so your
changes will take affect immediately, even for opened Explorer windows.
However, on slow computers, this desktop refresh might consume a fair
amount of CPU resources, and even hang the entire operating system for a
few seconds. If you want to avoid this desktop refresh on every change
that you make, simply disable the automatic refresh, by unchecking the
option under the following menu: Options->Automatic Desktop Refresh.
You can always initiate a desktop refresh when you need it, simply by
selecting 'File->Refresh Desktop Now' from the main menu.



Sending extension information to extension.nirsoft.net
======================================================

extension.nirsoft.net is a Web site that allows you to find out which
programs can open a specific file extension.
If you want, you can add the extension information stored in your
computer into extension.nirsoft.net Web site, by using the 'Send Report
to extension.nirsoft.net' option under the Help menu.(Ctrl+F9).
For more infromation about how to submit your extension information, read
here



Command-Line Options
====================



/stext <Filename>
Save the list of types/extensions into a regular text file.

/stab <Filename>
Save the list of types/extensions into a tab-delimited text file.

/scomma <Filename>
Save the list of types/extensions into a comma-delimited text file (csv).

/stabular <Filename>
Save the list of types/extensions into a tabular text file.

/shtml <Filename>
Save the list of types/extensions into HTML file (Horizontal).

/sverhtml <Filename>
Save the list of types/extensions into HTML file (Vertical).

/sxml <Filename>
Save the list of types/extensions into XML file.

/sort <column>
This command-line option can be used with other save options for sorting
by the desired column. If you don't specify this option, the list is
sorted according to the last sort that you made from the user interface.
The <column> parameter can specify the column index (0 for the first
column, 1 for the second column, and so on) or the name of the column,
like "Type Name" and "Extension". You can specify the '~' prefix
character (e.g: "~Extension") if you want to sort in descending order.
You can put multiple /sort in the command-line if you want to sort by
multiple columns.

Examples:
FileTypesMan.exe /shtml "f:\temp\types.html" /sort 2 /sort ~3
FileTypesMan.exe /shtml "f:\temp\types.html" /sort "Extension"

/nosort
When you specify this command-line option, the list will be saved without
any sorting.




Translating FileTypesMan to other languages
===========================================

In order to translate FileTypesMan to other language, follow the
instructions below:
1. Run FileTypesMan with /savelangfile parameter:
   FileTypesMan.exe /savelangfile
   A file named FileTypesMan_lng.ini will be created in the folder of
   FileTypesMan utility.
2. Open the created language file in Notepad or in any other text
   editor.
3. Translate all string entries to the desired language. Optionally,
   you can also add your name and/or a link to your Web site.
   (TranslatorName and TranslatorURL values) If you add this information,
   it'll be used in the 'About' window.
4. After you finish the translation, Run FileTypesMan, and all
   translated strings will be loaded from the language file.
   If you want to run FileTypesMan without the translation, simply rename
   the language file, or move it to another folder.



License
=======

This utility is released as freeware. You are allowed to freely
distribute this utility via floppy disk, CD-ROM, Internet, or in any
other way, as long as you don't charge anything for this. If you
distribute this utility, you must include all files in the distribution
package, without any modification !



Disclaimer
==========

The software is provided "AS IS" without any warranty, either expressed
or implied, including, but not limited to, the implied warranties of
merchantability and fitness for a particular purpose. The author will not
be liable for any special, incidental, consequential or indirect damages
due to loss of data or any other reason.



Feedback
========

If you have any problem, suggestion, comment, or you found a bug in my
utility, you can send a message to nirsofer@yahoo.com
