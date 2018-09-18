BULK INSERT a1207776.a1207776.[materiales]
   FROM 'e:\wwwroot\a1207776\materiales.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '0x0a'
      )

BULK INSERT a1207776.a1207776.[entregan]
   FROM 'e:\wwwroot\a1207776\entregan.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '0x0a'
      )

BULK INSERT a1207776.a1207776.[proyectos]
   FROM 'e:\wwwroot\a1207776\proyectos.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '0x0a'
      )

set dateformat dmy
BULK INSERT a1207776.a1207776.[proveedores]
   FROM 'e:\wwwroot\a1207776\proveedores.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '0x0a'
      )