design: https://www.figma.com/design/JzuvnSGD1GywE2A7QbCVGw/NextUI-Figma-Kit-(Community)-(Community)-(Copy)?node-id=481-16440&t=D999dZv1eJovzjI4-0
API: https://moonraker.readthedocs.io/en/latest/web_api/

-   set one file to multiple printers
-   update stock after printing
-   manage filament usage
-   check how much filament needed to print
-   page with cameras (add user camera)
-   status component show camaera (drag)
-   products page with search

Update product algorithm:

1. when printer status is 'complete', find some products in product state by printer status file path
2. get these product current count by api
3. check less count and increase this count by product state count
4. set new count to these products by api
