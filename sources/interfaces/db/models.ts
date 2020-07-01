////////////////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)                                                                  //
//                                                                                        //
// Copyright (C) 2018  Unicoderns S.A. - info@unicoderns.com - unicoderns.com             //
//                                                                                        //
// Permission is hereby granted, free of charge, to any person obtaining a copy           //
// of this software and associated documentation files (the "Software"), to deal          //
// in the Software without restriction, including without limitation the rights           //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell              //
// copies of the Software, and to permit persons to whom the Software is                  //
// furnished to do so, subject to the following conditions:                               //
//                                                                                        //
// The above copyright notice and this permission notice shall be included in all         //
// copies or substantial portions of the Software.                                        //
//                                                                                        //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR             //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,               //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE            //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                 //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,          //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE          //
// SOFTWARE.                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////

import { ORMForeignKeyField } from '../../enums'

/**
 * Parent model row interface
 */
export interface ORMModelRow {
    [key: string]: any // Wildcard to avoid compilator errors
}

/**
 * Key/Value object
 */
export interface ORMModelKeyValue {
    [key: string]: string | number | boolean | ORMModelOperatorValue
}

/**
 * Operator/Value object
 */
export interface ORMModelOperatorValue {
    [operator: string]: string | number
}

/**
 * Plain query
 * @var sql SQL string query code
 * @var values? Parameters to replace in the query
 * @var parameters? Parameters to replace in the query for DataApi
 */
export interface ORMModelQuery {
    sql: string
    values?: (string | number)[] | Record<string, any>
    parameters?: (string | number)[] | Record<string, any>
}

/**
 * Join declaration
 *
 * @var keyField Model foreign key
 * @var fields String array with names of fields to join
 * @var type Type of Join to apply E.g.: INNER, LEFT
 */
export interface ORMModelJoin {
    keyField: ORMForeignKeyField
    fields?: string[]
    type: string
}

/**
 * Select declaration
 *
 * @var fields If is NOT set "*" will be used, if there's a string then it will be used as is, a plain query will be
 * executed, if in the other hand an array is provided (Recommended), then it will filter the keys and run the query.
 * @var where Key/Value object used to filter the query, an array of Key/Value objects will generate a multiple filter separated by an "OR".
 * @var orderBy String with column_name and direction E.g.: "id, name ASC"
 * @var groupBy String with column_name E.g.: "id, name"
 */
export interface ORMModelSelect {
    fields?: string | string[]
    where?: string | ORMModelKeyValue | ORMModelKeyValue[]
    groupBy?: string
    orderBy?: string
}

/**
 * Select declaration with limit
 *
 * @var fields If is NOT set "*" will be used, if there's a string then it will be used as is, a plain query will be
 * executed, if in the other hand an array is provided (Recommended), then it will filter the keys and run the query.
 * @var where Key/Value object used to filter the query, an array of Key/Value objects will generate a multiple filter separated by an "OR".
 * @var orderBy String with column_name and direction E.g.: "id, name ASC"
 * @var groupBy String with column_name E.g.: "id, name"
 * @var limit Number of rows to retrieve
 */
export interface ORMModelSelectLimit extends ORMModelSelect {
    limit?: number
}

/**
 * Select declaration with limit
 *
 * @var fields If is NOT set "*" will be used, if there's a string then it will be used as is, a plain query will be
 * executed, if in the other hand an array is provided (Recommended), then it will filter the keys and run the query.
 * @var where Key/Value object used to filter the query, an array of Key/Value objects will generate a multiple filter separated by an "OR".
 * @var orderBy String with column_name and direction E.g.: "id, name ASC"
 * @var groupBy String with column_name E.g.: "id, name"
 * @var limit Number of rows to retrieve
 */
export interface ORMModelSelectReturn {
    numberOfRecordsUpdated: number
    records: any[]
}

/**
 * Update declaration
 *
 * @var data object data to be update in the table
 * @var where Key/Value object used to filter the query, an array of Key/Value objects will generate a multiple filter separated by an "OR", a "*" string wildcard is required for security reasons if you want to match all rows.
 */
export interface ORMModelUpdate {
    data: ORMModelRow
    where: string | ORMModelKeyValue | ORMModelKeyValue[]
}
