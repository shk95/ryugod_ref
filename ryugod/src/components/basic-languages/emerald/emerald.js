/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '%',
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
export var language = {
    defaultToken: 'invalid',
    ignoreCase: true,
    tokenPostfix: '.m',
    keywords: [
        'accept',
        'and',
        'as',
        'assert',
        'at',
        'attached',
        'awaiting',
        'begin',
        'builtin',
        'by',
        'checkpoint',
        'class',
        'closure',
        'codeof',
        'const',
        'else',
        'elseif',
        'end',
        'enumeration',
        'exit',
        'export',
        'external',
        'failure',
        'field',
        'fix',
        'for',
        'forall',
        'from',
        'function',
        'if',
        'immutable',
        'in',
        'initially',
        'isfixed',
        'islocal',
        'locate',
        'loop',
        'monitor',
        'move',
        'nameof',
        'new',
        'object',
        'op',
        'operation',
        'or',
        'primitive',
        'process',
        'record',
        'recovery',
        'refix',
        'restrict',
        'return',
        'returnandfail',
        'self',
        'signal',
        'suchthat',
        'syntactictypeof',
        'then',
        'to',
        'typeobject',
        'typeof',
        'unavailable',
        'unfix',
        'var',
        'view',
        'visit',
        'wait',
        'when',
        'while',
        'false',
        'nil',
        'true',
    ],
    builtins: [
        'acquireLock',
        'add',
        'addChar',
        'addGListener',
        'addLower',
        'addMember',
        'addString',
        'addUpper',
        'catenate',
        'clone',
        'close',
        'closeclosecreate',
        'create',
        'createGRep',
        'delay',
        'delete',
        'doneReady',
        'empty',
        'enlargefillVector',
        'fillVector',
        'find',
        'findGRep',
        'findhighestGElectionID',
        'findHighestGID',
        'findInternal',
        'fixAll',
        'FLiteral',
        'flushclosecreate',
        'flushfreeLock',
        'fromLocal',
        'fromUnix',
        'getActiveNodes',
        'getAllNodes',
        'getChar',
        'getComparator',
        'getCoordinator',
        'getElement',
        'getElements',
        'getGElection',
        'getGID',
        'getGRep',
        'getID',
        'getLoadAverage',
        'getLocationServer',
        'getLocks',
        'getNext',
        'getNode',
        'getNodeInformation',
        'getnow',
        'getState',
        'getStdin',
        'getStdout',
        'getString',
        'getTimeOfDay',
        'getUserData',
        'getValue',
        'getWriteHolder',
        'groupUnavailable',
        'iGetTimeOfDay',
        'iInsert',
        'iisStaleinsert',
        'initializegetCoordinator',
        'insert',
        'Insert',
        'invokee',
        'isStalecreate',
        'iupdate',
        'list',
        'listGListeners',
        'listMembers',
        'listNodes',
        'literal',
        'lowerbound',
        'lowlevelobsolete',
        'moveAll',
        'moveListenerDone',
        'moveListenerStart',
        'moveMemberDone',
        'moveMemberStart',
        'moveTo',
        'newGElection',
        'newGID',
        'nodeDown',
        'nodeUp',
        'ntoh',
        'operation',
        'Pad',
        'ping',
        'putChar',
        'putInt',
        'putReal',
        'putString',
        'queryReady',
        'rawRead',
        'readLockreadUnlockgetNext',
        'refixAll',
        'remove',
        'Remove',
        'removeFile',
        'removeGListener',
        'removeGRep',
        'removeLower',
        'removeMember',
        'removeNodeEventHandler',
        'removeUpper',
        'requestUpdate',
        'RequestUpdate',
        'resetcreate',
        'setCoordinator',
        'setE',
        'setElement',
        'setFP',
        'setLocationServer',
        'setNext',
        'setNodeEventHandler',
        'setO',
        'setPC',
        'setRootDirectory',
        'setSB',
        'setSigned',
        'setSlice',
        'setSP',
        'setState',
        'setUnsigned',
        'slideTo',
        'startReady',
        'token',
        'toUnix',
        'trydelete',
        'tryinsert',
        'trylist',
        'trylookup',
        'tryRequestUpdate',
        'unfixAll',
        'unGetChar',
        'update',
        'upperbound',
        'verifyCoordinator',
        'verifyCoordinatorCalling',
        'waitUntil',
        'write',
        'writeInt',
        'writeLock',
        'writeUnlock',
    ],
    typeKeywords: [
        'Any',
        'AOpVector',
        'AOpVectorE',
        'AParamList',
        'Array',
        'Bitchunk',
        'Boolean',
        'Buffer',
        'Character',
        'ConcreteType',
        'Condition',
        'COpVector',
        'COpVectorE',
        'Decoder',
        'Directory',
        'DirectoryGaggle',
        'GListener',
        'GManager',
        'Group',
        'Handler',
        'immutableVector',
        'ImmutableVectorOfAny',
        'ImmutableVectorOfInt',
        'ImmutableVectorOfString',
        'InStream',
        'Integer',
        'InterpreterState',
        'LiteralList',
        'Node',
        'NodeList',
        'NodeListElement',
        'None',
        'OutStream',
        'RDirectory',
        'Real',
        'RISA',
        'RISC',
        'Sequence',
        'SequenceOfAny',
        'SequenceOfCharacter',
        'Signature',
        'String',
        'Stub',
        'Time',
        'type',
        'Unix',
        'Vector',
        'VectorOfAny',
        'VectorOfChar',
        'VectorOfInt',
        'VectorOfString',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(%.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};