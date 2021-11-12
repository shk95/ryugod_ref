/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ';',
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
    defaultToken: '',
    tokenPostfix: '.ll',
    
    keywords: [
        'add',
        'addrspacecast',
        'alloca',
        'and',
        'arcp',
        'ashr',
        'atomicrmw',
        'bitcast',
        'br',
        'catchpad',
        'catchswitch',
        'catchret',
        'call',
        'callbr',
        'cleanuppad',
        'cleanupret',
        'cmpxchg',
        'eq',
        'exact',
        'extractelement',
        'extractvalue',
        'fadd',
        'fast',
        'fcmp',
        'fdiv',
        'fence',
        'fmul',
        'fpext',
        'fptosi',
        'fptoui',
        'fptrunc',
        'free',
        'frem',
        'fsub',
        'fneg',
        'getelementptr',
        'icmp',
        'inbounds',
        'indirectbr',
        'insertelement',
        'insertvalue',
        'inttoptr',
        'invoke',
        'landingpad',
        'load',
        'lshr',
        'malloc',
        'max',
        'min',
        'mul',
        'nand',
        'ne',
        'ninf',
        'nnan',
        'nsw',
        'nsz',
        'nuw',
        'oeq',
        'oge',
        'ogt',
        'ole',
        'olt',
        'one',
        'or',
        'ord',
        'phi',
        'ptrtoint',
        'resume',
        'ret',
        'sdiv',
        'select',
        'sext',
        'sge',
        'sgt',
        'shl',
        'shufflevector',
        'sitofp',
        'sle',
        'slt',
        'srem',
        'store',
        'sub',
        'switch',
        'trunc',
        'udiv',
        'ueq',
        'uge',
        'ugt',
        'uitofp',
        'ule',
        'ult',
        'umax',
        'umin',
        'une',
        'uno',
        'unreachable',
        'unwind',
        'urem',
        'va_arg',
        'xchg',
        'xor',
        'zext',
        'syn',
        'keyword',
        'llvmKeyword',
        'acq_rel',
        'acquire',
        'addrspace',
        'alias',
        'align',
        'alignstack',
        'alwaysinline',
        'appending',
        'argmemonly',
        'arm_aapcscc',
        'arm_aapcs_vfpcc',
        'arm_apcscc',
        'asm',
        'atomic',
        'available_externally',
        'blockaddress',
        'builtin',
        'byref',
        'byval',
        'c',
        'catch',
        'caller',
        'cc',
        'ccc',
        'cleanup',
        'coldcc',
        'comdat',
        'common',
        'constant',
        'datalayout',
        'declare',
        'default',
        'define',
        'deplibs',
        'dereferenceable',
        'distinct',
        'dllexport',
        'dllimport',
        'dso_local',
        'dso_preemptable',
        'except',
        'external',
        'externally_initialized',
        'extern_weak',
        'fastcc',
        'tailcc',
        'filter',
        'from',
        'gc',
        'global',
        'hhvmcc',
        'hhvm_ccc',
        'hidden',
        'immarg',
        'initialexec',
        'inlinehint',
        'inreg',
        'inteldialect',
        'intel_ocl_bicc',
        'internal',
        'linkonce',
        'linkonce_odr',
        'localdynamic',
        'localexec',
        'local_unnamed_addr',
        'minsize',
        'module',
        'monotonic',
        'msp430_intrcc',
        'mustprogress',
        'musttail',
        'naked',
        'nest',
        'noalias',
        'nobuiltin',
        'nocapture',
        'noimplicitfloat',
        'noinline',
        'nonlazybind',
        'nonnull',
        'norecurse',
        'noredzone',
        'noreturn',
        'noundef',
        'nounwind',
        'optnone',
        'optsize',
        'personality',
        'private',
        'protected',
        'ptx_device',
        'ptx_kernel',
        'readnone',
        'readonly',
        'release',
        'returned',
        'returns_twice',
        'sanitize_address',
        'sanitize_memory',
        'sanitize_thread',
        'section',
        'seq_cst',
        'sideeffect',
        'signext',
        'syncscope',
        'source_filename',
        'speculatable',
        'spir_func',
        'spir_kernel',
        'sret',
        'ssp',
        'sspreq',
        'sspstrong',
        'strictfp',
        'swiftcc',
        'swiftself',
        'tail',
        'target',
        'thread_local',
        'to',
        'triple',
        'unnamed_addr',
        'unordered',
        'uselistorder',
        'uselistorder_bb',
        'uwtable',
        'volatile',
        'weak',
        'weak_odr',
        'within',
        'writeonly',
        'x86_64_sysvcc',
        'win64cc',
        'x86_fastcallcc',
        'x86_stdcallcc',
        'x86_thiscallcc',
        'zeroext',
    ],
    builtins: [
        'void',
        'half',
        'bfloat',
        'float',
        'double',
        'x86_fp80',
        'fp128',
        'ppc_fp128',
        'label',
        'metadata',
        'x86_mmx',
        'type',
        'label',
        'opaque',
        'token',
        'null',
        'i32',
        'i64',
        'i16',
        'i8',
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
            [/[%@][.a-zA-Z_]\w*/, 'metatag'],
            [
                /[.a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(;.*$)/, 'comment'],
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