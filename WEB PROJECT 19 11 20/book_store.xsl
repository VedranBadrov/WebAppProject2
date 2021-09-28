<?xml version="1.0" encoding="UTF-8"?>


<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>book_store.xsl</title>
            </head>
            <body>
                <h2>Book Store</h2>
                  
                <h3>All book titles:</h3>
                <xsl:apply-templates select="/bookstore/book/title"/>
                
                <table border="1">
                    <tr bgcolor="#ffff66">
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>    
                    </tr>
                    <xsl:for-each select="bookstore/book">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="author"/></td>
                             <td><xsl:value-of select="year"/></td>
                            <td><xsl:value-of select="category"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="quantity"/></td>
                            <td><xsl:value-of select="unit_price"/></td>                                               
                        </tr>
                    </xsl:for-each>                    
                </table>
                     
                <h2>Books with the price greater than 45:</h2>
                <xsl:apply-templates select="/bookstore/book[unit_price>'45']"/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="title">
        <p><xsl:value-of select="." /></p>
    </xsl:template>
    
    <xsl:template match="book[price>'45']">
        <p><xsl:value-of select="title" />, <xsl:value-of select="unit_price"/></p>
    </xsl:template>
    
</xsl:stylesheet>
