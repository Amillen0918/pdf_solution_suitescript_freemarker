/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(
    ['N/record'],
    (record) => {
   const beforeLoad = ({type, form, newRecord}) => {
       if (type === 'PRINT') {

            form.addField({label: 'PDF JSON', id: 'custpage_json_field', type: 'LONGTEXT'});

            const transactionRecord = record.load({type: newRecord.type, id: newRecord.id});

            const oRecord = {
                recordType: newRecord.type
            };

            transactionRecord.setValue({fieldId: 'custpage_json_field', value: JSON.stringify(oRecord)});
       }
   };
   return {beforeLoad};
});